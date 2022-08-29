using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace FarmFreshAPI.Models
{
    public class ProductDetail
    {
        [Key]
        public int productId { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string productName { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string productSubName { get; set; }
        [Column(TypeName = "nvarchar(MAX)")]
        public string productImage { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string productPacket { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string productInfo { get; set; }
        [Column(TypeName = "nvarchar(MAX)")]
        public string productAbout { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string productCountry { get; set; }
        [Column(TypeName = "int")]
        public int productQty { get; set; }
    }
}
