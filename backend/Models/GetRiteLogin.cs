using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace WebApiJobSearch.Models
{
    public class GetRiteLogin
    {
        //public string ProfilePicture { get; set; }
        public int Id { get; set; }
        [Required]
        [MaxLength(30)] // Adjust the max length as needed
        public string Username { get; set; }
        [Required]
        [MaxLength(30)] // Adjust the max length as needed
        public string? Password { get; set; }
        public GetRiteUser? User { get; set; }
        [Required]
        public int UserId { get; set; }
    }
}
