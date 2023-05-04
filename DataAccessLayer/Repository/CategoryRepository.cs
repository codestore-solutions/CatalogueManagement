using DataAccessLayer.Data;
using DataAccessLayer.Interface;
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
        public CategoryRepository(ProductDbContext dbContext) : base(dbContext)
        {
        }
    }
}
