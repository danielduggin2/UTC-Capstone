using System.ComponentModel.DataAnnotations;

namespace WebApiJobSearch.Models
{
    public class GetRiteAppointmentNote
    {
        public int Id { get; set; }
        [Required]
        public GetRiteAppointment GetRiteAppointment { get; set; }
        [Required]
        public int GetRiteAppointmentId { get; set; }
        public string? Content { get; set; }



    }
}
