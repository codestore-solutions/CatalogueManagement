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
    public class BrandRepository : GenericRepository<Brand>, IBrandRepository
    {
        private readonly ProductDbContext _dbContext;
        public BrandRepository(ProductDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Product>> GetProductsByBrand(long id)
        {
            var products = await _dbContext.Products.Where(x => x.BrandId == id).ToListAsync();
            return products;
        }
        public async Task<IEnumerable<Brand>> GetPendingBrands()
        {
            var brands = await _dbContext.Brands.Where(x => x.StatusId == 1).ToListAsync();
            return brands;
        }

        public void Approve(long id)
        {
            _dbContext.Brands.First(x => x.Id == id).StatusId = 2;
            _dbContext.Brands.First(x => x.Id == id).Status = Status.Approved;
        }

        public void MarkPending(long id)
        {
            _dbContext.Brands.First(x => x.Id == id).StatusId = 1;
            _dbContext.Brands.First(x => x.Id == id).Status = Status.Pending;
        }
    }
}
