using Models.ProductModels;
using ProductCatalog.DTOs.Incoming;

namespace ProductCatalog.DTOs
{
    public class ProductWithVariant
    {
        public string Name { get; set; } = null!;
        public long CategoryId { get; set; }
        public long SubcategoryId { get; set; }
        public long SellerId { get; set; }
        public long BrandId { get; set; }

        public IList<VariantIn> Variants { get; set; } = new List<VariantIn>();
    }
}
