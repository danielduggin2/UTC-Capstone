namespace WebApiJobSearch.Models
{
    public class GetRiteAppointment
    {
        public int Id { get; set; }
        public DateTime AppointmentTime { get; set; }
        public string? Reason { get; set; }
        public string? Injury { get; set; }
        public GetRiteOffice? Office { get; set; }
        public int OfficeId { get; set; }
        public List<GetRitePhysician>? AssignedPhysicians { get; set; }
        public GetRitePatient? Patient { get; set; }
        public List<GetRiteAppointmentExercise>? Exercises { get; set; }
        public List<GetRiteAppointmentNote>? Notes { get; set; }
        public int PatientId { get; set; }
        //public string? Signature { get; set; }

    }
}
