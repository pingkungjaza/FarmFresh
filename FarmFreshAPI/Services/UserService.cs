using FarmFreshAPI.Models;
using FarmFreshAPI.Repositories;

namespace FarmFreshAPI.Services
{
    public class UserService:IUserService
    {
        public User Get(UserLogin userLogin)
        {
            User user = UserRepository.Users.FirstOrDefault(o => o.Username.Equals(userLogin.Username, StringComparison.OrdinalIgnoreCase) && o.Password.Equals(userLogin.Password));

            return user;
        }
    }
}
