using Microsoft.AspNetCore.Mvc;
using WebApiJobSearch.Models;

namespace WebApiJobSearch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Patients : ControllerBase
    {
        private readonly TodoContext _context;
        public Patients(TodoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Index(
            [FromQuery] string? name,
            [FromQuery] string? bodypart)
        {
            var officeId = 3;

            var exercisesQ = _context.GetRiteOffices.AsQueryable();
            exercisesQ = exercisesQ.Select(o => o.Patients);

            //if (!string.IsNullOrEmpty(name))
            //{
            //    exercisesQ = exercisesQ.Where(e => e.Name.ToLower().Contains(name.ToLower()));
            //}

            //if (!string.IsNullOrEmpty(bodypart))
            //{
            //    exercisesQ = exercisesQ.Where(e => e.BodyPart.ToLower().Contains(bodypart.ToLower()));
            //}
            var genderS = Enum.GetName(typeof(Gender), 1);

            return Ok(genderS);
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
