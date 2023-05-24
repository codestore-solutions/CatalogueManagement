using System.ComponentModel.DataAnnotations;

namespace ProductCatalog.DTOs.Incoming
{
    public class ProductIn
    {
        [Required]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "Product name should be between 6 to 100 character")]
        public string Name { get; set; } = null!;

        [Required]
        public long CategoryId { get; set; }

        [Required]
        public long SubCategoryId { get; set; }

        [Required]
        public long SellerId { get; set; }

        [Required]
        public long BrandId { get; set; }
    }
}
