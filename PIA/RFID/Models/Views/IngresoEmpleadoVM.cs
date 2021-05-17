using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RFID.Models.Views
{
    public class IngresoEmpleadoVM
    {
        [Key]
        public int EmpleadoId { get; set; }
        [Required(ErrorMessage = "El usuario no puede estar vacio")]
        public string Nombre { get; set; }
        public bool Habilitado { get; set; }
        public List<IngresoVM> ingresos { get; set; }
    }
}
