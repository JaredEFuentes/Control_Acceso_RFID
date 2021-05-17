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
        public Empleado()
        {
            Ingresos = new HashSet<Ingresos>();
        }

        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage ="El nombre es obligatorio")]
        public string Nombre { get; set; }
        [Required(ErrorMessage ="El nombre es obligatorio")]
        [MinLength(10, ErrorMessage ="El rfid debe ser mayor a 10 caracteres")]
        [MaxLength(50, ErrorMessage = "El rfid debe ser menor a 50 caracteres")]
        public string Rfid { get; set; }
        [Required(ErrorMessage ="El estado del empleado es obligatorio")]
        public bool Habilitado { get; set; }

        public virtual ICollection<Ingresos> Ingresos { get; set; }
    }
}
