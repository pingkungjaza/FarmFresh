using FarmFreshAPI.Models;

namespace FarmFreshAPI.Repositories
{
    public class UserRepository
    {
        public static List<User> Users = new()
        {
            new() { Username = "admin", EmailAddress = "admin@email.com", Password = "password", GivenName = "AdminName", Surname = "AdminSurname", Role = "Administrator" },
            new() { Username = "user", EmailAddress = "user@email.com", Password = "password", GivenName = "UserName", Surname = "UserSurname", Role = "User" },
        };
    }
}
