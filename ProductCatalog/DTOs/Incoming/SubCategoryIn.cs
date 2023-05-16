using System.ComponentModel.DataAnnotations;

namespace ProductCatalog.DTOs.Incoming
{
    public class SubCategoryIn
    {
        [Required]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Name of Category Must be between 2 to 50")]
        public string Name { get; set; } = null!;

        [Required]
        public long CategoryId { get; set; }
    }
}
