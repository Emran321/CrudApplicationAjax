using CrudApplicationAjax.Data;
using CrudApplicationAjax.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudApplicationAjax.Controllers.Ajax
{
    public class AjaxController : Controller
    {
        private readonly ApplicationContext _context;
        public AjaxController(ApplicationContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        public JsonResult EmployeeList()
        {
            var data = _context.Employees.ToList();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult AddEmployee(Employee employee)
        {
            var emp = new Employee()
            {
                Name = employee.Name,
                State = employee.State,
                City = employee.City,
                Salary = employee.Salary,
            };
            _context.Employees.Add(emp);
            _context.SaveChanges();
            return new JsonResult("Data is Saved");
           
        }
       
        public JsonResult Delete(int id) {
             var data = _context.Employees.Where(x => x.Id == id).SingleOrDefault();
            _context.Employees.Remove(data);
            _context.SaveChanges();
            return new JsonResult(data);
        }

        public JsonResult Edit(int id)
        {
            var data = _context.Employees.Where(x => x.Id == id).SingleOrDefault();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult Update(Employee employee)
        {
            _context.Employees.Update(employee);
            _context.SaveChanges();
            return new JsonResult("Record updated");
        }

    }
}
