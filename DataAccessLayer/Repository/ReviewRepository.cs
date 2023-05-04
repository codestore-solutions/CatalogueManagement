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
    public class ReviewRepository : GenericRepository<Review>, IReviewRepository
    {
        public ReviewRepository(ProductDbContext dbContext) : base(dbContext)
        {
        }
    }
}
