using DataAccessLayer.Interface;
using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Service
{
    public class BrandService : IBrandService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IBrandRepository _brandRepository;

        public BrandService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _brandRepository = unitOfWork.BrandRepository;
        }



        public async Task AddNewBrand(Brand brand)
        {
            _brandRepository.Add(brand);
            await _unitOfWork.SaveAsync();
        }

        public Task DeleteBrand(long id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Brand>> GetAllBrands()
        {
            return await _brandRepository.GetAllAsync();
        }

        public async Task<IEnumerable<ProductOverview>> GetProductsByBrand(long id)
        {
            var products = await  _brandRepository.GetProductsByBrand(id);
            List<ProductOverview> productOverviews = new List<ProductOverview>();

            foreach (var item in products)
            {
                productOverviews.Add(new ProductOverview()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Rating = _unitOfWork.ProductRepository.GetRating(item.Id),
                    Attachment = _unitOfWork.ProductRepository.GetAttachment(item.Id)
                });
            }
            return productOverviews;

        }

        public Task UpdateBrand(long id, Brand brand)
        {
            throw new NotImplementedException();
        }
    }
}
