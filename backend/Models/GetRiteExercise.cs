using System.ComponentModel.DataAnnotations;

namespace WebApiJobSearch.Models
{
    public class GetRiteExercise
    {
        public int Id { get; set; }
        //picture
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? BodyPart { get; set; }
        [Required]
        public string? Description { get; set; }
        public string? VideoURL { get; set; }
        public bool isDefault  { get; set;}
        public GetRiteOffice? Office { get; set; }
        public int? OfficeId { get; set; }
        public List<GetRiteWorkout>? Workouts { get; set; }
    }
}
