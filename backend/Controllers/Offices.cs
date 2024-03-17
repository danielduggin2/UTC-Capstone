using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Text.Json.Serialization;
using System.Text.Json;
using WebApiJobSearch.Models;

namespace WebApiJobSearch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Offices : ControllerBase
    {
        private readonly TodoContext _context;
        public Offices(TodoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Office()
        {
            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
                // Other options as needed
            };
            var officeId = 3;
            Type stateType = typeof(State);

            Func<Type, object, string> getNameDelegate = Enum.GetName;
            var appointmentsQ = _context.GetRiteOffices.Select(a => new
            {
                a.Id,
                a.OfficeName,
                a.OfficeEmail,
                a.OfficeAbout,
                address = new {
                    a.OfficeAddress.Address,
                    state = getNameDelegate(stateType, a.OfficeAddress.State),
                    a.OfficeAddress.City,
                    a.OfficeAddress.ZipCode
                },
                physicians = a.Physicians.Select(pS => new {
                    pS.Id,
                    pS.UserId,
                    name = pS.User.FirstName + " " + pS.User.LastName,
                    pS.User.Email
                    })
            }).Where(a => a.Id == officeId);

            return Ok(appointmentsQ);
        }

        [HttpGet("unused/{id}")]
        public IActionResult unused(int id)
        {
            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
                // Other options as needed
            };
            var officeId = 3;
            var patientId = 3;

            var appointmentsQ = _context.GetRiteAppointments.Select(a => new {
                a.Id,
                a.AppointmentTime,
                a.Reason,
                a.Injury,
                a.OfficeId,
                a.PatientId,
                a.Exercises,
                a.Notes
            }).Where(a => a.OfficeId == officeId && a.PatientId == patientId && a.Id == id)
            .OrderBy(a => a.AppointmentTime);

            var appointmentQ = _context.GetRiteAppointments
                .Where(a => a.OfficeId == officeId && a.Id == id)
                .Select(a => new
                {
                    a.Id,
                    a.AppointmentTime,
                    a.Reason,
                    a.Injury,
                    a.OfficeId,
                    a.PatientId,
                    Exercises = a.Exercises.Select(eS => new { eS.Sets,eS.GetRiteExercise.Name }).ToList(),
                    a.Notes
                });
      

            return Ok(appointmentQ);
        }

        [HttpGet("office")]
        public IActionResult OfficeAppointments()
        {

            var officeId = 3;
            var appointmentQ = _context.GetRiteAppointments
                .Where(a => a.OfficeId == officeId)
                .Select(a => new
                {
                    a.Id,
                    start = a.AppointmentTime,
                    end = a.AppointmentTime,
                    title = a.Patient.User.FirstName + " " + a.Patient.User.LastName,
                });

            var appointmentQ2 = _context.GetRiteAppointments
               .Where(a => a.OfficeId == officeId)
               .Select(a => new
               {
                   a.Id,
                   a.AppointmentTime,
                   a.Reason,
                   a.Injury,
                   a.OfficeId,
                   a.PatientId,
                   Patient = a.Patient.User.FirstName,
                   a.Notes
               });


            return Ok(appointmentQ);
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
