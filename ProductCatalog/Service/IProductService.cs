using Models.ProductModels;
using ProductCatalog.DTOs;

namespace ProductCatalog.Service
{
    public interface IProductService
    {
        Task<IEnumerable<ProductOverview>> GetAll();

        Task<ProductDetailDto> GetProductDetail(long id);
    }
}
