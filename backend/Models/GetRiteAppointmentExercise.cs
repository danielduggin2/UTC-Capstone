using System.ComponentModel.DataAnnotations;

namespace WebApiJobSearch.Models
{
    public class GetRiteAppointmentExercise
    {
        public int Id { get; set; }
        [Required]
        public GetRiteAppointment GetRiteAppointment { get; set; }
        [Required]
        public int GetRiteAppointmentId { get; set; }
        public GetRiteExercise? GetRiteExercise { get; set; }
        public int? GetRiteExerciseId { get; set; }
        public int? Sets { get; set; }
        public int? Reps { get; set; }


    }
}
