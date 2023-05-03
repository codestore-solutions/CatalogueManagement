using Models.ProductModels;

namespace ProductCatalog.DTOs
{
    public class ProductDto
    {
        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public string SubCategoryName = null!;
        public string CategoryName = null!;
        public string BrandName = null!;
        public string SellerName = null!;
        public decimal Rating { get; set; }
        public ICollection<Varient> Varients { get; set; } = null!;
        public ICollection<Attachment> Attachments { get; set; } = null!;
        public ICollection<Review> Reviews { get; set; } = null!;
    }
}
