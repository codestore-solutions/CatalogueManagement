using Models.ProductModels;
using ProductCatalog.DTOs;

namespace ProductCatalog.Service.Interface
{
    public interface IBrandService
    {
        Task<IEnumerable<Brand>> GetAllBrands();
        Task<IEnumerable<ProductOverview>> GetProductsByBrand(long id);
        Task<long> AddNewBrand(string brandName);
        Task<bool> UpdateBrand(long id, Brand brand);
        Task<bool> DeleteBrand(long id);

    }
}
