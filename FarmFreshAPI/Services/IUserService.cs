using FarmFreshAPI.Models;

namespace FarmFreshAPI.Services
{
    public interface IUserService
    {
        public User Get(UserLogin userLogin);
    }
}
