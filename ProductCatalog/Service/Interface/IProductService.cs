using Models.ProductModels;
using ProductCatalog.DTOs;

namespace ProductCatalog.Service.Interface
{
    public interface IProductService
    {
        Task<IEnumerable<ProductOverview>> GetAll();

        Task<ProductDetailDto> GetProductDetail(long id);

        
    }
}
