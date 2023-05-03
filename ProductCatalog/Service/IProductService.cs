using Models.ProductModels;
using ProductCatalog.DTOs;

namespace ProductCatalog.Service
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDto>> GetAll();
    }
}
