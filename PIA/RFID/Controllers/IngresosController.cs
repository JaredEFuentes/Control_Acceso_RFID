using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using RFID.Helper;
using RFID.Models;
using RFID.Models.Views;

namespace RFID.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngresosController : Controller
    {
        private readonly RFIDContext context;

        public IngresosController(RFIDContext _context)
        {
            context = _context;
        }

        // GET: Ingresos
        [HttpGet]
        public async Task<IEnumerable<Ingresos>> GetIngresos()
        {
            return await context.Ingresos.ToListAsync();
        }

        // GET: Ingresos/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetIngresosbyId(int id)
        {
            var ingreso = await context.Ingresos.FirstOrDefaultAsync(m => m.RegistroId == id);
            if (ingreso == null) {
                return NotFound(ErrorHelper.Response(404, "No existe ese id"));
            }
            return Ok(ingreso);
        }

        [HttpGet("byEmp/{id}")]
        public async Task<IActionResult> GetIngresobyEmpleado(int id)
        {
            var empleado = await context.Empleado.FirstOrDefaultAsync(m => m.Id == id);
            if (empleado == null)
            {
                return NotFound(ErrorHelper.Response(404, "No existe ese id de empleado"));
            }

            var request = await context.Ingresos.Where(x => x.EmpleadoId == empleado.Id).ToListAsync();
            var ingresos = new List<IngresoVM>();

            foreach(Ingresos item in request)
            {
                ingresos.Add(new IngresoVM
                {
                    RegistroId = item.RegistroId,
                    Fecha = item.Fecha
                });
            }

            return Ok(new IngresoEmpleadoVM
            {
                EmpleadoId = id,
                Nombre = empleado.Nombre,
                ingresos = ingresos
            });
        }

        [HttpGet("byDay/{day}/{month}/{year}")]
        public async Task<IActionResult> GetIngresosbyDay(int day, int month, int year)
        {
            var empleados = await context.Empleado.ToListAsync();
            var ingresos = await context.Ingresos.ToListAsync();

            var ingresosByDay = new List<IngresoWNameVM>();
            var Fecha = day.ToString() + "/" + month.ToString() + "/" + year.ToString();

            foreach (Ingresos item in ingresos)
            {
                string fechaRegistro = item.Fecha.ToShortDateString();
                if(fechaRegistro == Fecha)
                {
                    ingresosByDay.Add(new IngresoWNameVM
                    {
                        RegistroId = item.RegistroId,
                        Nombre = empleados.Find(s => s.Id == item.EmpleadoId).Nombre,
                        Fecha = item.Fecha
                    });
                }
            }

            if(ingresosByDay == null)
            {
                return NotFound(ErrorHelper.Response(404, "No hay registros con esa fecha"));
            }

            return Ok(ingresosByDay);
        }

        // POST: Ingresos
        [HttpPost]
        public async Task<IActionResult> RegistrarIngreso([Bind("EmpleadoId")] Ingresos ingreso)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ErrorHelper.GetModelStateErrors(ModelState));
            }

            ingreso.Fecha = DateTime.Now;
            context.Add(ingreso);
            await context.SaveChangesAsync();
            return Created($"/ingresos/{ingreso.RegistroId}", ingreso);
        }

    }
}
