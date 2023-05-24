using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Incoming;

namespace ProductCatalog.Service.Interface
{
    public interface IProductService
    {
        Task<ResponseDto<IEnumerable<ProductOverview>>> GetAll();

        Task<ProductDetailDto> GetProductDetail(long id);

        Task<long> AddProduct(ProductIn productIn);

        Task<bool> MarkInactive(long id);


    }
}
