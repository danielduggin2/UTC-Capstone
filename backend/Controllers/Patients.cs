using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
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



            var patientsQ = _context.GetRitePatients
                .SelectMany(p => p.Offices, (patient, office) => new { Patient = patient, Office = office })
                .Where(x => x.Office.Id == officeId)
                .Select(x => new { 
                    id = x.Patient.Id,
                    injury = x.Patient.Injury,
                    birthdate = x.Patient.Birthdate.ToString("yyyy-MM-ddTHH:mm:ss"),
                    phone = x.Patient.PhoneNumber,
                    name = x.Patient.User.FirstName + " " +  x.Patient.User.LastName
                })
                .ToList();

            return Ok(patientsQ);
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
