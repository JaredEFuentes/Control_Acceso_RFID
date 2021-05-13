using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace RFID.Models
{
    public partial class Empleado
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "El nombre del empleado es obligatorio")]
        [MinLength(1, ErrorMessage = "El nombre debe ser mayor a 1 caracter")]
        public string Nombre { get; set; }
        [Required(ErrorMessage = "El rfid del empleado no puede estar vacio")]
        [MinLength(10, ErrorMessage = "El rfid debe ser mayor a 10 caracteres")]
        [MaxLength(50, ErrorMessage = "El rfid debe ser menor a 50 caracteres")]
        public string Rfid { get; set; }

        public virtual ICollection<Ingresos> Ingresos { get; set; }
    }
}
