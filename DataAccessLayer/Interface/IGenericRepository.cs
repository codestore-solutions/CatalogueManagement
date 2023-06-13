using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IGenericRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T?> GetAsync(long id);
        EntityEntry<T> Add(T entity);
        EntityEntry<T> Update(T entity);
        EntityEntry<T> Delete(T entity);
    }
}
