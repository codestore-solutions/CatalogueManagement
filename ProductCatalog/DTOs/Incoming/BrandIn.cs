using System.ComponentModel.DataAnnotations;

namespace ProductCatalog.DTOs.Incoming
{
    public class BrandIn
    {
        [Required]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Brand name should be of length between 2 and 50")]
        public string Name { get; set; } = null!;
    }
}
