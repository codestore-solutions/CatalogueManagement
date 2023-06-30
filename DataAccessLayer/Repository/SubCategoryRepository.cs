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
        public async Task<IEnumerable<SubCategory>> GetPendingSubCategories()
        {
            var subCategories = await _dbContext.SubCatagories.Where(x => x.StatusId == 1).ToListAsync();
            return subCategories;
        }

        public void Approve(long id)
        {
            _dbContext.SubCatagories.First(x => x.Id == id).StatusId = 2;
            _dbContext.SubCatagories.First(x => x.Id == id).Status = Status.Approved;
        }

        public void MarkPending(long id)
        {
            _dbContext.SubCatagories.First(x => x.Id == id).StatusId = 1;
            _dbContext.SubCatagories.First(x => x.Id == id).Status = Status.Pending;
        }
    }
}
