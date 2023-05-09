using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public class Product
    {
        [Key]
        public long Id { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(50)]
        public string Name { get; set; } = null!;

        public bool IsActive { get; set; }

        [Required]
        [ForeignKey("CategoryId")]
        public long CategoryId { get; set; }

        [Required]
        [ForeignKey("SubCategoryId")]
        public long SubCategoryId { get; set; }

        [Required]
        [ForeignKey("SellerId")]
        public long SellerId { get; set; }

        [Required]
        [ForeignKey("BrandId")]
        public long BrandId { get; set; }

        public virtual ICollection<ProductCategory> ProductCategory { get; set; } = new List<ProductCategory>();
    }
}
