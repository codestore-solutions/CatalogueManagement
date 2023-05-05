using DataAccessLayer.Interface;
using Models.ProductModels;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Service
{
    public class VarientService : IVarientService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IVarientRepository _varientRepository;

        public VarientService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _varientRepository = unitOfWork.VarientRepository;
        }

        public async Task<long> AddVarient(Varient varient)
        {
            _varientRepository.Add(varient);
            await _unitOfWork.SaveAsync();
            return varient.Id;
        }

        public async Task DeleteVarient(long id)
        {
            var existingVarient  = await _varientRepository.GetAsync(id);
            _varientRepository.Delete(existingVarient);
        }

        public async Task<IEnumerable<Varient>> GetAllVarientsOfProduct(long productId)
        {
            return await _varientRepository.GetVarientsOfProduct(productId);
        }

        public async Task MarkVarientInactive(long id)
        {
            await _varientRepository.MarkVarientInactive(id);
        }

        public async Task UpdateVarient(long id, Varient varient)
        {
            await _varientRepository.GetAsync(id);
            if (varient == null) return;
            if(id == varient.Id)
            {
                _varientRepository.Update(varient);
                await _unitOfWork.SaveAsync();
            }


        }
    }
}
