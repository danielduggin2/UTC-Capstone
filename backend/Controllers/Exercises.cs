using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WebApiJobSearch.CustomClaims;
using WebApiJobSearch.Models;

namespace WebApiJobSearch.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class Exercises : ControllerBase
    {
        private readonly TodoContext _context;
        public Exercises(TodoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Index(
            [FromQuery] string? name,
            [FromQuery] string? bodypart)
        {
            var officeId = 3;

            var exercisesQ = _context.GetRiteExercises.AsQueryable();
            exercisesQ = exercisesQ.Where(e => e.OfficeId == officeId || e.isDefault == true);

            if (!string.IsNullOrEmpty(name))
            {
                exercisesQ = exercisesQ.Where(e => e.Name.ToLower().Contains(name.ToLower()));
            }

            if (!string.IsNullOrEmpty(bodypart))
            {
                exercisesQ = exercisesQ.Where(e => e.BodyPart.ToLower().Contains(bodypart.ToLower()));
            }

            return Ok(exercisesQ);
        }

        [HttpGet("bodyparts")]
        public IActionResult BodyParts()
        {
            var officeId = 3;
            var bodyPartsQ = _context.GetRiteExercises
                .Where(e => e.OfficeId == officeId || e.isDefault == true)
                .Select(e => e.BodyPart)
                .Distinct();
       
            return Ok(bodyPartsQ);
        }
    }
}
