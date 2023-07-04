using DataAccessLayer.Interface;
using Microsoft.EntityFrameworkCore;
using Models.ProductModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Data
{
    public static class SaveWithTenantId
    {
        public static void SaveWithTenantid(this DbContext dbContext, string tenantId)
        {
            foreach (var entityEntry in dbContext.ChangeTracker.Entries()
                .Where(e => e.State == EntityState.Added))
            {
                var hasTenantId = entityEntry.Entity as EntityBase;
                if (hasTenantId != null && hasTenantId.TenantId == null)
                {
                    hasTenantId.TenantId = tenantId;
                }
            }
        }
    }
}
