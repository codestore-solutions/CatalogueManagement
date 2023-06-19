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

        public async Task<IEnumerable<Varient>> GetVarientsOfProduct(long productId)
        {
            var varients = await _context.Varients.Where(x => x.ProductId == productId).ToListAsync();
            return varients;
        }

        public async Task MarkVarientInactive(long varientId)
        {
            var existingVarient = _context.Varients.FirstOrDefault(x => x.Id == varientId);
            if (existingVarient != null)
            {
                existingVarient.IsActive = false;
                _context.Varients.Update(existingVarient);
            }
            await _context.SaveChangesAsync();
        }

        public async Task<decimal> GetPriceOfOneVarient(long productId)
        {
            var varient = _context.Varients.FirstOrDefault(i => i.ProductId == productId);
            if(varient == null)
            {
                return decimal.MinusOne;
            }
            return varient.Price;
        }

        
    }
}
