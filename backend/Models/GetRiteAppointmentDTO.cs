namespace WebApiJobSearch.Models
{
    public class GetRiteAppointmentDTO
    {
        public DateTime AppointmentTime { get; set; }
        public string? Reason { get; set; }
        public string? Injury { get; set; }
        public int PatientId { get; set; }
    }
}
