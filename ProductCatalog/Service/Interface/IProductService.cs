using Models.ProductModels;
using ProductCatalog.DTOs;

namespace ProductCatalog.Service.Interface
{
    public interface IProductService
    {
        Task<ResponseDto<IEnumerable<ProductOverview>>> GetAll();

        Task<ProductDetailDto> GetProductDetail(long id);

        
    }
}
