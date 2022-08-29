using FarmFreshAPI.Models;

namespace FarmFreshAPI
{
    public class ProductResponse
    {
        public List<ProductDetail> ProductDetailList { get; set; } = new List<ProductDetail>();
        public int Page { get; set; }
        public int PerPage { get; set; }
        public int Total { get; set; }
        public int TotalPages { get; set; }
    }
}
