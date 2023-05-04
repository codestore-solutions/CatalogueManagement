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
    public class BrandRepository : GenericRepository<Brand>, IBrandRepository
    {
        public BrandRepository(ProductDbContext dbContext) : base(dbContext)
        {
        }
    }
}
