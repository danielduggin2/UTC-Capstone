using System.ComponentModel.DataAnnotations;

namespace WebApiJobSearch.Models
{
    public enum Gender
    { 
        F,
        M,
        X
    }
    public class GetRitePatient
    {
        public int Id { get; set; }
        //public string ProfilePicture { get; set; }
        public DateTime Birthdate { get; set; }
        public string? Injury { get; set; }
        public Gender Gender { get; set; }
        [Required(ErrorMessage="Phone Number is Required.")] public string? PhoneNumber { get; set; }
        public string? MedicalHistoryNotes { get; set; }
        public GetRiteUser? User { get; set; }
        public int UserId { get; set; }
        public GetRiteAddress? Address { get; set; }
        public int? AddressId { get; set; }
        public List<GetRiteAppointment>? Appointments { get; set; }
        public List<GetRiteOffice>? Offices { get; set; }
        //insuranceCard



    }
}
