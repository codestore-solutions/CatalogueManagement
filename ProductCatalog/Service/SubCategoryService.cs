using DataAccessLayer.Interface;
using DataAccessLayer.Repository;
using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Outgoing;
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

        public async Task<ResponseDto<IEnumerable<SubCategoryOut>>> GetAllSubCategories()
        {
            var subcategories = await _subCategoryRepository.GetAllAsync();
            var subCategoriesOut = Mapper.Mapper.SubCategoryToSubCategoryOut(subcategories);
            var res = ResponseDto<IEnumerable<SubCategoryOut>>.CreateSuccessResponse(subCategoriesOut);
            return res;
            
        }

        public async Task<ResponseDto<IEnumerable<SubCategoryOut>>> GetSubCategoriesByCategory(long categoryId)
        {
            var subcategories = await _subCategoryRepository.GetSubCategoryByCategory(categoryId);
            var subCategoriesOut = Mapper.Mapper.SubCategoryToSubCategoryOut(subcategories);
            var res = ResponseDto<IEnumerable<SubCategoryOut>>.CreateSuccessResponse(subCategoriesOut);
            return res;
        }
        public async Task<ResponseDto> GetPendingSubCategory()
        {
            var subCategories = await _subCategoryRepository.GetPendingSubCategories();
            var res = Mapper.Mapper.SubCategoryToSubCategoryOut(subCategories);
            return ResponseDto<IEnumerable<SubCategoryOut>>.CreateSuccessResponse(res);
        }

        public async Task Approve(long id)
        {
            _subCategoryRepository.Approve(id);
            await _unitOfWork.SaveAsync();
        }

        public async Task MarkPending(long id)
        {
            _subCategoryRepository.MarkPending(id);
            await _unitOfWork.SaveAsync();
        }
    }
}
