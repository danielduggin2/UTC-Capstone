using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace WebApiJobSearch.Models
{
    public class GetRiteLoginDTO
    {
        [Required]
        [MaxLength(30)] // Adjust the max length as needed
        public string Username { get; set; }
        [Required]
        [MaxLength(30)] // Adjust the max length as needed
        public string? Password { get; set; }
    }
}
