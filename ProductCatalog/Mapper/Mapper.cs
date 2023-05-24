using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Incoming;
using ProductCatalog.DTOs.Outgoing;

namespace ProductCatalog.Mapper
{
    public static class Mapper
    {

        public static Product ProductInToProduct(ProductIn productIn)
        {
            Product product = new()
            {
                Name = productIn.Name,
                BrandId = productIn.BrandId,
                CategoryId = productIn.CategoryId,
                SubCategoryId = productIn.SubCategoryId,
                IsActive = true,
                SellerId = productIn.SellerId,
            };

            return product;
        }


        

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
