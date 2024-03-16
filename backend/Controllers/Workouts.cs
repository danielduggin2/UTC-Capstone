using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApiJobSearch.Models;

namespace WebApiJobSearch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Workouts : ControllerBase
    {
        private readonly TodoContext _context;
        public Workouts(TodoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Index(
                [FromQuery] string? description,
                [FromQuery] string? bodypart)
        {
            var officeId = 3;
            var workoutsQ = _context.GetRiteWorkouts
                    .Select(w => new { w.Id, w.Description, w.BodyPart, w.isDefault, w.Exercises, w.OfficeId })
                .AsQueryable();
            workoutsQ = workoutsQ.Where(w => w.OfficeId == officeId || w.isDefault == true);


            if (!string.IsNullOrEmpty(description))
            {
                workoutsQ = workoutsQ.Where(w => w.Description.ToLower().Contains(description.ToLower()));
            }


            return Ok(workoutsQ);
        }

        [HttpGet("{id}")]
        public IActionResult GetTodoItem(int id)
        {
            if (_context.GetRiteWorkouts == null)
            {
                return NotFound();
            }
            var workoutQ = _context.GetRiteWorkouts
                .Select(w => new { w.Id, w.Description, w.BodyPart, w.isDefault, w.Exercises, w.OfficeId })
                .Where(w => w.Id == id);

            if (workoutQ == null)
            {
                return NotFound();
            }

            return Ok(workoutQ);
        }

    }
}
