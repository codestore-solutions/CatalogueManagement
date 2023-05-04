using DataAccessLayer.Data;
using DataAccessLayer.Interface;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly ProductDbContext _dbContext;
        private DbSet<T> _dbSet;

        public GenericRepository(ProductDbContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = _dbContext.Set<T>();

        }

        public EntityEntry<T> Add(T entity)
        {
            return _dbSet.Add(entity);
        }

        public EntityEntry<T> Delete(T entity)
        {
            return _dbSet.Remove(entity);
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.AsNoTracking().ToListAsync();
        }

        public async Task<T> GetAsync(long id)
        {
            var entity =  await _dbSet.FindAsync(id);
            return entity;
        }

        public EntityEntry<T> Update(T entity)
        {
            return _dbSet.Update(entity);
        }
    }
}
