using DataAccessLayer.Interface;
using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Incoming;
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

        public async Task<long> AddNewBrand(BrandIn brandIn)
        {
            Brand brand = new()
            {
                Name = brandIn.Name,
            };
            _brandRepository.Add(brand);
            await _unitOfWork.SaveAsync();
            return brand.Id;
            
        }

        public async Task<bool> DeleteBrand(long id)
        {
            var brand = await _brandRepository.GetAsync(id);
            if (brand == null)
            {
                return false;
            }
            _brandRepository.Delete(brand);
            await _unitOfWork.SaveAsync();
            return true;
        }

        public async Task<ResponseDto<IEnumerable<Brand>>> GetAllBrands()
        {
            var brands =  await _brandRepository.GetAllAsync();
            var res = ResponseDto<IEnumerable<Brand>>.CreateSuccessResponse(brands);
            return res;

        }

        public async Task<ResponseDto<IEnumerable<ProductOverview>>> GetProductsByBrand(long id)
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
            return ResponseDto<IEnumerable<ProductOverview>>.CreateSuccessResponse(productOverviews);

        }

        public async Task<bool> UpdateBrand(long id, Brand brand)
        {
            var existing = await _brandRepository.GetAsync(id);
            if (existing == null) return false;

            _brandRepository.Update(brand);
            await _unitOfWork.SaveAsync();
            return true;
        }
    }
}
