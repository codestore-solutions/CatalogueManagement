using Models.ProductModels;
using ProductCatalog.DTOs.Incoming;

namespace ProductCatalog.Service.Interface
{
    public interface IVariantService
    {
        Task<long> AddVariant(VariantIn varientIn);

        Task UpdateVariant(long id, Variant varient);

        Task DeleteVariant(long id);

        Task MarkVariantInactive(long id);

        Task<IEnumerable<Variant>> GetAllVariantsOfProduct(long productId);


    }
}
