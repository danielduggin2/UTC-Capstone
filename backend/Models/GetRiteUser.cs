namespace WebApiJobSearch.Models
{
    public class GetRiteUser
    {
        //public string ProfilePicture { get; set; }
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public GetRiteLogin? GetRiteLogin { get; set; }
        public GetRitePatient? GetRitePatient { get; set; }
        public GetRitePhysician? GetRitePhysician { get; set; }

    }
}
