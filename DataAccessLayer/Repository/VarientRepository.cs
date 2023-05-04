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
    public class VarientRepository : GenericRepository<Varient>, IVarientRepository
    {
        private readonly ProductDbContext _context;
        public VarientRepository(ProductDbContext dbContext) : base(dbContext)
        {
            _context = dbContext;
        }

        
    }
}
