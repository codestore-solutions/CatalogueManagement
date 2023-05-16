using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Outgoing;

namespace ProductCatalog.Mapper
{
    public static class Mapper
    {




        

        public static IEnumerable<SubCategoryOut> SubCategoryToSubCategoryOut(IEnumerable<SubCategory> subCategories)
        {
            IList<SubCategoryOut> subCategoryOuts = new List<SubCategoryOut>();
            foreach (var subCategory in subCategories)
            {
                subCategoryOuts.Add(new SubCategoryOut()
                {
                    Id = subCategory.Id,
                    Name = subCategory.Name,
                    
                });
            }
            return subCategoryOuts;
        }


        public static IEnumerable<CategoryOut> CategoryToCategoryOut(IEnumerable<Category> categories)
        {
            IList<CategoryOut> categoriesOutgoing = new List<CategoryOut>();
            foreach (var category in categories)
            {
                categoriesOutgoing.Add(new CategoryOut()
                {
                    Id = category.Id,
                    Name = category.Name,
                });
            }
            return categoriesOutgoing;
        }
    }
}
