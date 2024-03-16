namespace WebApiJobSearch.Models
{
    public class GetRiteOffice
    {
        public int Id { get; set; }
        public string? OfficeName { get; set; }
        public string? OfficeEmail { get; set; }
        public string? OfficeAbout { get; set; }
        public List<GetRiteAppointment>? Appointments { get; set; }
        public List<GetRitePhysician>? Physicians { get; set; }
        public List<GetRitePatient>? Patients { get; set; }
        public List<GetRiteExercise>? Exercises { get; set; }
        public List<GetRiteWorkout>? Workout { get; set; }
        public GetRiteAddress? OfficeAddress { get; set; }
        public int? OfficeAddressId { get; set; }
        //add physicians
    }
}
