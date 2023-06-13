using Models.ProductModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IVarientRepository : IGenericRepository<Varient>
    {
        Task<IEnumerable<Varient>> GetVarientsOfProduct(long productId);
        Task MarkVarientInactive(long varientId);
        Task<decimal> GetPriceOfOneVarient(long productId);
    }
}
