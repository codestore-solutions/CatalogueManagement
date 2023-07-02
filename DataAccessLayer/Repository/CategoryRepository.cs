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
    public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
    {
        private readonly ProductDbContext _productDbContext;
        public CategoryRepository(ProductDbContext dbContext) : base(dbContext)
        {
            _productDbContext = dbContext;
        }

        public void Approve(long id)
        {
            _productDbContext.Categories.First(x => x.Id == id).StatusId = 2;
            _productDbContext.Categories.First(x => x.Id == id).Status = Status.Approved;

        }

        public async Task<IEnumerable<Category>> GetPendingCategories()
        {
            var categories = await _productDbContext.Categories.Where(x => x.StatusId == 1).ToListAsync();
            return categories;
        }

        public void MarkPending(long id)
        {
            _productDbContext.Categories.First(x => x.Id == id).StatusId = 1;
            _productDbContext.Categories.First(x => x.Id == id).Status = Status.Pending;
        }
    }
}
