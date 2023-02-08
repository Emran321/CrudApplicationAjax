
using CrudApplicationAjax.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudApplicationAjax.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions option):base(option)
        {
            
        }
        public DbSet<Employee>Employees { get; set; }
    }
}
