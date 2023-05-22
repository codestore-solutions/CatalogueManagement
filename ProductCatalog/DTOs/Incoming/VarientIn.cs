using System.ComponentModel.DataAnnotations;

namespace ProductCatalog.DTOs.Incoming
{
    public class VarientIn
    {
        [Required]
        public long ProductId { get; set; }

        [Required]
        [MinLength(20, ErrorMessage = "Description should be more then 20 character")]
        [MaxLength(255, ErrorMessage = "Description should be less then 255 character")]
        public string Description { get; set; } = null!;

        [Required]
        public bool IsActive { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public int AvailableStock { get; set; }
        
        
    }
}
