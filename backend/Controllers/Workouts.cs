using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApiJobSearch.Models;

namespace WebApiJobSearch.Controllers
{
    [Authorize]
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

        [HttpDelete("{Wid}/exercise/{Eid}")]
        public IActionResult Delete(int Wid, int Eid)
        {

            var workout = _context.GetRiteWorkouts.Select(w => new { w.Id, w.isDefault, w.Exercises }).FirstOrDefault(w => w.Id == Wid);
            if (workout == null)
            {
                return NotFound();
            }
            if (workout.isDefault == true)
            {
                return BadRequest("workout is default");
            }
            
            var exercise = workout.Exercises.FirstOrDefault(e => e.Id == Eid);
            if (exercise == null)
            {
                return NotFound();
            }
            
            var workoutEdit = _context.GetRiteWorkouts.Include(w => w.Exercises).FirstOrDefault(w => w.Id == Wid);
            var exerciseEdit = _context.GetRiteExercises.Find(Eid);
           
            workoutEdit.Exercises.Remove(exerciseEdit);
            _context.SaveChanges();
            return Ok(new {workout= "" });
        }

        [HttpPost("{Wid}/exercise/{Eid}")]
        public IActionResult Add(int Wid, int Eid)
        {

            var workout = _context.GetRiteWorkouts.Select(w => new { w.Id, w.isDefault, w.Exercises }).FirstOrDefault(w => w.Id == Wid);
            if (workout == null)
            {
                return NotFound();
            }
            if (workout.isDefault == true)
            {
                return BadRequest("workout is default");
            }

            var workoutEdit = _context.GetRiteWorkouts.Include(w => w.Exercises).FirstOrDefault(w => w.Id == Wid);
            var exerciseEdit = _context.GetRiteExercises.Find(Eid);

            workoutEdit.Exercises.Add(exerciseEdit);
            _context.SaveChanges();
            return Ok(new { workout = "" });
        }

    }
}
