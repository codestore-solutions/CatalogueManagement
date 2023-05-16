using TenantMicroservice.TenantService.Options;

namespace TenantMicroservice.TenantService
{
    public interface ITenantService
    {
        public string GetDatabaseProvider();
        public string GetConnectionString();
        public Tenant GetTenant();
    }
}
