using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using RFID.Helper;
using RFID.Models;
using RFID.Models.Views;

namespace RFID.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : Controller
    {
        private readonly RFIDContext context;

        public EmpleadoController(RFIDContext _context)
        {
            context = _context;
        }

        // GET: api/Empleado
        [HttpGet]
        public async Task<IEnumerable<Empleado>> GetEmpleados()
        {
            return await context.Empleado.ToListAsync();
        }

        // GET: api/Empleado/WOR
        [HttpGet("WOR")]
        public async Task<IEnumerable<EmpleadoVM>> GetEmpleadosWORfid()
        {
            return await context.Empleado.Select(s => new EmpleadoVM{
                Id = s.Id,
                Nombre = s.Nombre,
                Habilitado = s.Habilitado
            }).ToListAsync();
        }

        // GET: api/Empleado/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmpleadobyid(int id)
        {
            var empleado = await context.Empleado.FirstOrDefaultAsync(m => m.Id == id);
            if (empleado == null)
            {
                return NotFound(ErrorHelper.Response(404, "No existe ese id de empleado"));
            }

            return Ok(empleado);
        }

        // GET: api/Empleado/byRfid/rfid
        [HttpGet("byRfid/{rfid}")]
        public async Task<IActionResult> GetEmpleadobyRfid(string rfid)
        {
            var empleado = await context.Empleado.FirstOrDefaultAsync(m => m.Rfid == rfid);
            if (empleado == null)
            {
                return NotFound(ErrorHelper.Response(404, "No existe ese rfid de empleado"));
            }

            return Ok(new EmpleadoVM
            {
                Id = empleado.Id,
                Nombre = empleado.Nombre,
                Habilitado = empleado.Habilitado
            });
        }

        [HttpPost]
        public async Task<IActionResult> Post([Bind("Nombre,Rfid")] Empleado empleado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ErrorHelper.GetModelStateErrors(ModelState));
            }

            if (await context.Empleado.Where(x => x.Rfid == empleado.Rfid).AnyAsync())
            {
                return BadRequest(ErrorHelper.Response(400, "el rfid ya existe"));
            }
	    
	    empleado.Habilitado = true;

            context.Add(empleado);
            await context.SaveChangesAsync();
            return Created($"/empleado/{empleado.Id}", empleado);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var empleado = await context.Empleado.FindAsync(id);
            if(empleado == null)
            {
                return BadRequest(ErrorHelper.Response(400, "el id de empleado no existe o ya a sido eliminado"));
            }

            empleado.Habilitado = false;
            context.Entry(empleado).State = EntityState.Modified;
            await context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [Bind("Id, Nombre, Rfid, Hablitado")]Empleado empleado)
        {
            if(!await context.Empleado.Where(s => s.Id == empleado.Id).AsNoTracking().AnyAsync())
            {
                return NotFound(ErrorHelper.Response(404, "el empleado a modificar no fue encontrado"));
            }
            if(await context.Empleado.Where(s => s.Rfid == empleado.Rfid && s.Id != empleado.Id).AnyAsync())
            {
                return BadRequest(ErrorHelper.Response(400, "el RFID ya existe"));
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ErrorHelper.GetModelStateErrors(ModelState));
            }

            context.Entry(empleado).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("Habilitar/{id}")]
        public async Task<IActionResult> Habilitar(int id)
        {
            var empleado = await context.Empleado.FindAsync(id);
            if (empleado == null)
            {
                return BadRequest(ErrorHelper.Response(400, "el id de empleado no existe"));
            }

            empleado.Habilitado = true;
            context.Entry(empleado).State = EntityState.Modified;
            await context.SaveChangesAsync();

            return Ok();
        }
    }
}
