
using Microsoft.EntityFrameworkCore;

namespace FarmFreshAPI.Models
{
    public class ProductDetailContext : DbContext
    {
        public ProductDetailContext(DbContextOptions<ProductDetailContext> options) : base(options)
        {

        }

        public DbSet<ProductDetail> ProductDetail { get; set; }
    }
}
