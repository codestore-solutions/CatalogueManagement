using Models.ProductModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IVariantRepository : IGenericRepository<Variant>
    {
        Task<IEnumerable<Variant>> GetVariantsOfProduct(long productId);
        Task MarkVariantInactive(long varientId);
        Task<decimal> GetPriceOfOneVariant(long productId);
    }
}
