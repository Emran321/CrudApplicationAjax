using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CrudApplicationAjax.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(1000 , MinimumLength = 6, ErrorMessage = "Filed Must be atlest 6 character")]
        public string Name { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public decimal? Salary { get; set; }

    }
}
