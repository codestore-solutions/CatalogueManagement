using Models.ProductModels;
using ProductCatalog.DTOs.Incoming;

namespace ProductCatalog.DTOs
{
    public class ProductWithVarient
    {
        public string Name { get; set; } = null!;
        public long CategoryId { get; set; }
        public long SubcategoryId { get; set; }
        public long SellerId { get; set; }
        public long BrandId { get; set; }

        public IList<VarientIn> Varients { get; set; } = new List<VarientIn>();
    }
}
