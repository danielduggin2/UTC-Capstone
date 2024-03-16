using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using WebApiJobSearch.Models;

namespace WebApiJobSearch.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly TodoContext _context;
        private IConfiguration _config;
        public LoginController(IConfiguration config, TodoContext context)
        {
            _context = context;
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] UserLogin userLogin)
        {
            var user = Authenticate(userLogin);

            if (user != null)
            {
                var token = Generate(user);
                var cookieOptions = new CookieOptions
                {
                    Expires = DateTime.Now.AddMinutes(15),
                    //HttpOnly = true,
                    //Secure = true
                };
                Response.Cookies.Append("JwtToken", token, cookieOptions);
                var data = new {responseToken = token};
                return Ok(data);


            }
            return NotFound("User not found");
        }

        private string Generate(UserModel user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JwtSettings:Key"]));
            var credentials = new SigningCredentials(securityKey,SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Username),
                new Claim(ClaimTypes.Email, user.EmailAddress),
                new Claim(ClaimTypes.GivenName, user.GivenName),
                new Claim(ClaimTypes.Surname, user.Surname),
                new Claim(ClaimTypes.Role, user.Role),

            };

            var token = new JwtSecurityToken(
                _config["JwtSettings:Issuer"],
                _config["JwtSettings:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credentials
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private UserModel Authenticate(UserLogin userLogin)
        {
            var currentUser = _context.UserModels.FirstOrDefault(o => o.Username.ToLower() == userLogin.Username.ToLower()
            && o.Password == userLogin.Password);

            if (currentUser != null)
            {
                return currentUser;
            }
            return null;
        }

        //[HttpPost]
        //public async Task<ActionResult<TodoItemDTO>> PostTodoItem(CreateTodoItemDTO todoItemDTO)
        //{
        //    if (_context.TodoItems == null)
        //    {
        //        return Problem("Entity set 'TodoContext.TodoItems'  is null.");
        //    }

        //    var todoItem = new TodoItem
        //    {
        //        IsComplete = todoItemDTO.IsComplete,
        //        Name = todoItemDTO.Name,
        //    };

        //    _context.TodoItems.Add(todoItem);
        //    await _context.SaveChangesAsync();

        //    /*return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);*/
        //    return CreatedAtAction(
        //        nameof(GetTodoItem),
        //        new { id = todoItem.Id },
        //        ItemToDTO(todoItem));
        //}




    }
}
