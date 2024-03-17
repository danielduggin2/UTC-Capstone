﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Text.Json.Serialization;
using System.Text.Json;
using WebApiJobSearch.Models;

namespace WebApiJobSearch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Appointments : ControllerBase
    {
        private readonly TodoContext _context;
        public Appointments(TodoContext context)
        {
            _context = context;
        }

        [HttpGet("patient/{id}")]
        public IActionResult Patient(int id)
        {
            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
                // Other options as needed
            };
            var officeId = 3;

            var appointmentsQ = _context.GetRiteAppointments.Select(a => new {
                a.Id,
                a.AppointmentTime,
                a.Reason,
                a.Injury,
                a.OfficeId,
                a.PatientId,
                a.Exercises,
                a.Notes
            }).Where(a => a.OfficeId == officeId && a.PatientId == id)
            .OrderBy(a => a.AppointmentTime);

            //var patientsQ = _context.GetRitePatients
            //    .SelectMany(p => p.Offices, (patient, office) => new { Patient = patient, Office = office })
            //    .Where(x => x.Office.Id == officeId)
            //    .Select(x => new { 
            //        id = x.Patient.Id,
            //        injury = x.Patient.Injury,
            //        birthdate = x.Patient.Birthdate.ToString("yyyy-MM-ddTHH:mm:ss"),
            //        phone = x.Patient.PhoneNumber,
            //        name = x.Patient.User.FirstName + " " +  x.Patient.User.LastName
            //    })
            //    .ToList();
            //var jsonString = JsonSerializer.Serialize(appointmentsQ, options);

            return Ok(appointmentsQ);
        }

        [HttpGet("{id}")]
        public IActionResult Index(int id)
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