using Models.ProductModels;

namespace ProductCatalog.DTOs
{
    public class ProductDetailDto
    {
        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public string SubCategoryName = null!;
        public string CategoryName = null!;
        public string BrandName = null!;
        public string SellerName = null!;
        public decimal Rating { get; set; }
        public IEnumerable<Varient> Varients { get; set; } = null!;
        public IEnumerable<Attachment> Attachments { get; set; } = null!;
        public IEnumerable<Review> Reviews { get; set; } = null!;
    }
}
