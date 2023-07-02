using Models.ProductModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface ISubCategoryRepository : IGenericRepository<SubCategory>
    {
        Task<IEnumerable<SubCategory>> GetSubCategoryByCategory(long id);
        Task<IEnumerable<SubCategory>> GetPendingSubCategories();
        void Approve(long id);
        void MarkPending(long id);
    }
}
