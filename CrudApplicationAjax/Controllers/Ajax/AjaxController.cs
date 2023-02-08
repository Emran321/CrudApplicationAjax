using CrudApplicationAjax.Data;
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
    }
}
