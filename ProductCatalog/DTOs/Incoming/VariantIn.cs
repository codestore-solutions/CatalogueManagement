using System.ComponentModel.DataAnnotations;

namespace ProductCatalog.DTOs.Incoming
{

    public class VariantAdd
    {
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
    public class VariantIn : VariantAdd
    {
        [Required]
        public long ProductId { get; set; }
        public string Name { get; set; }
        public string UOM { get; set; }
        public string SKU { get; set; }

        public IList<string> Attachment { get; set; } = new List<string>();

    }

    public class VariantOut : VariantIn
    {
        public long Id { get; set; }
    }
    

}

// epPlus