using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace RFID.Models
{
    public partial class Ingresos
    {
        [Key]
        public int RegistroId { get; set; }
        [Required(ErrorMessage ="El id del empleado es obligatorio")]
        public int EmpleadoId { get; set; }
        [Required(ErrorMessage = "La fecha de ingreso es obligatoria")]
        public DateTime Fecha { get; set; }

        public virtual Empleado Empleado { get; set; }
    }
}
