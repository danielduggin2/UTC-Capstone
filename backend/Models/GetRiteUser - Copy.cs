using System.Security.Claims;
using WebApiJobSearch.CustomClaims;

namespace WebApiJobSearch.Models
{
    public class JwtUserInfo
    {
        public string? UserId { get; set; }
        public string? OfficeId { get; set; }
        public string? PhysicianId { get; set; }
        public string? PatientId { get; set; }
    }
}
