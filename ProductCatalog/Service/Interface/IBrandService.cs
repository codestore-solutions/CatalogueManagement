using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Incoming;

namespace ProductCatalog.Service.Interface
{
    public interface IBrandService
    {
        Task<ResponseDto<IEnumerable<Brand>>> GetAllBrands();
        Task<ResponseDto<IEnumerable<ProductOverview>>> GetProductsByBrand(long id);
        Task<long> AddNewBrand(BrandIn brandIn);
        Task<bool> UpdateBrand(long id, Brand brand);
        Task<bool> DeleteBrand(long id);

    }
}
