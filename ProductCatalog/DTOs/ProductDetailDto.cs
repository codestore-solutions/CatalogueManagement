using Models.ProductModels;
using ProductCatalog.DTOs.Incoming;

namespace ProductCatalog.DTOs
{
    public class ProductDetailDto
    {
        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public long SubCategoryId { get; set; }
        public long CategoryId { get; set; }
        public long BrandId {get; set; }
        public long VendorId { get; set; }
        public string SellerName = null!;
        //public decimal Rating { get; set; }
        public IEnumerable<VariantOut> Varients { get; set; } = null!;
    }
}
