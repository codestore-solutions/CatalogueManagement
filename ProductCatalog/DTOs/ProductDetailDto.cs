using Microsoft.Extensions.Diagnostics.HealthChecks;
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
        public string? CategoryName { get; set; }
        public long BrandId {get; set; }
        public string? BrandName { get; set; }
        public long VendorId { get; set; }
        public string? SellerName = null!;
        
        //note:- need to implement on DBModal
        public DateTime PublishedOn { get; set; }
        
        public decimal Rating { get; set; }
        public IEnumerable<VariantOut> Varients { get; set; } = null!;
    }
}
