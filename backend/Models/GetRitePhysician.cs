using System.ComponentModel.DataAnnotations;

namespace WebApiJobSearch.Models
{
    public class GetRitePhysician
    {
        public int Id { get; set; }
        public List<GetRiteAppointment>? AssignedAppointments { get; set; }
        public List<GetRiteTask>? Tasks { get; set; }
        public GetRiteUser? User { get; set; }
        public int UserId { get; set; }
        public GetRiteOffice? Office { get; set; }
        public int OfficeId { get; set; }
        
    }
}
