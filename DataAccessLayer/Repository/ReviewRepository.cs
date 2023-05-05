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
    public class ReviewRepository : GenericRepository<Review>, IReviewRepository
    {
        private readonly ProductDbContext _context;

        public ReviewRepository(ProductDbContext dbContext) : base(dbContext)
        {
            _context = dbContext;
        }

        public async Task<IEnumerable<Review>> GetReviewsByProductId(long id)
        {
            var reviews = await _context.Reviews.Where(x => x.ProductId == id).ToListAsync();
            return reviews;
        }
    }
}
