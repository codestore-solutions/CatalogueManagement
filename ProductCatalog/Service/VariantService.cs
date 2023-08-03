using DataAccessLayer.Interface;
using Models.ProductModels;
using ProductCatalog.DTOs.Incoming;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Service
{
    public class VariantService : IVariantService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IVariantRepository _variantRepository;

        public VariantService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _variantRepository = unitOfWork.VariantRepository;
        }

        public async Task<long> AddVariant(VariantIn variantIn)
        {
            Variant variant = new()
            {
                Name = variantIn.Name,
                Description = variantIn.Description,
                AvailableStock = variantIn.AvailableStock,
                Price = variantIn.Price,
                ProductId = variantIn.ProductId,
                IsActive = variantIn.IsActive,
            };
            _variantRepository.Add(variant);
            await _unitOfWork.SaveAsync();
            return variant.Id;
        }

        public async Task DeleteVariant(long id)
        {
            var existingVariant  = await _variantRepository.GetAsync(id);
            if (existingVariant != null)
            {
                _variantRepository.Delete(existingVariant);
            }
            await _unitOfWork.SaveAsync();
        }

        public async Task<IEnumerable<Variant>> GetAllVariantsOfProduct(long productId)
        {
            return await _variantRepository.GetVariantsOfProduct(productId);
        }

        public async Task MarkVariantInactive(long id)
        {
            await _variantRepository.MarkVariantInactive(id);
        }

        public async Task UpdateVariant(long id, Variant variantIn)
        {
            var variant = await _variantRepository.GetAsync(id);
            if (variant == null) return;
            if(id == variantIn.Id)
            {
                _variantRepository.Update(variantIn);
                await _unitOfWork.SaveAsync();
            }

        }
    }
}
