using DataAccessLayer.Data;
using DataAccessLayer.Interface;
using Microsoft.EntityFrameworkCore;
using Models.ProductModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repository
{
    public class SubCategoryRepository : GenericRepository<SubCategory>, ISubCategoryRepository
    {
        private readonly ProductDbContext _dbContext;
        public SubCategoryRepository(ProductDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<SubCategory>> GetSubCategoryByCategory(long id)
        {
            var subCategories = await _dbContext.SubCatagories.Where(x => x.CategoryId == id).ToListAsync();
            return subCategories;
        }
    }
}
