namespace WebApiJobSearch.Models
{
    public class GetRiteTask
    {
        public int Id { get; set; }
        public string? TaskContent { get; set;}
        public bool? isCompleted { get; set; }
        public GetRitePhysician? Physician { get; set; }
        public int PhysicianId { get; set; }

    }
}
