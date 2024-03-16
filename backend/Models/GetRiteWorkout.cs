namespace WebApiJobSearch.Models
{
    public class GetRiteWorkout
    {
        public int Id { get; set; }
        public string? BodyPart { get; set; }
        public string? Description { get; set; }
        public bool isDefault { get; set; }
        public List<GetRiteExercise>? Exercises { get; set; }
        public GetRiteOffice? Office { get; set; }
        public int? OfficeId { get; set; }
    }
}
