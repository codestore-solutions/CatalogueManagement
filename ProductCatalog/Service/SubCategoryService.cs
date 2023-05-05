using DataAccessLayer.Interface;
using Models.ProductModels;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Service
{
    public class SubCategoryService : ISubCategoryService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ISubCategoryRepository _subCategoryRepository;

        public SubCategoryService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _subCategoryRepository = unitOfWork.SubcategoryRepository;
        }

        public async Task<long> AddSubCategory(SubCategory subCategory)
        {
            _subCategoryRepository.Add(subCategory);
            await _unitOfWork.SaveAsync();
            return subCategory.Id;
        }

        public async Task<IEnumerable<SubCategory>> GetAllSubCategories()
        {
            return await _subCategoryRepository.GetAllAsync();
        }

        public async Task<IEnumerable<SubCategory>> GetSubCategoriesByCategory(long categoryId)
        {
            return await _subCategoryRepository.GetSubCategoryByCategory(categoryId);
        }
    }
}
