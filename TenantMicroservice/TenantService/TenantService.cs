using Microsoft.AspNetCore.Http;
using Microsoft.Identity.Web;
using TenantMicroservice.TenantService;
using TenantMicroservice.TenantService.Options;

namespace TenantMicroservice.TenantService
{
    public class TenantService : ITenantService
    {
        private readonly TenantSetting _tenantSetting;
        private HttpContext _httpContext;
        private Tenant _currentTenant;

        public TenantService(TenantSetting tenantSetting, IHttpContextAccessor contextAccessor)
        {
            _tenantSetting = tenantSetting;
            _httpContext = contextAccessor.HttpContext;
            if(_httpContext != null)
            {
                if(_httpContext.Request.Headers.TryGetValue("tenant", out var tenantId))
                {
                    SetTenant(tenantId);
                }
                else
                {
                    throw new Exception("Invalid Tenant!");
                }
            }
        }

        private void SetTenant(string tenantId)
        {
            _currentTenant = _tenantSetting.Tenants.FirstOrDefault(x => x.TID == tenantId);

            if (_currentTenant == null) throw new Exception("invalid Tenant");

            if (string.IsNullOrEmpty(_currentTenant.ConnectionString))
            {
                SetDefaultConnectionStringToCurrentTenant();
            }
        }

        private void SetDefaultConnectionStringToCurrentTenant()
        {
            _currentTenant.ConnectionString = _tenantSetting.Defaults.ConnectionString;
        }

        public string GetDatabaseProvider()
        {
            return _tenantSetting.Defaults.DBProvider;
        }

        public string GetConnectionString()
        {
            return _currentTenant.ConnectionString;
        }

        public Tenant GetTenant()
        {
            var claim = _httpContext.User.Claims.FirstOrDefault(e => e.Type == ClaimConstants.TenantId);

            if (claim is null) throw new UnauthorizedAccessException("Authorization Failed");

            var tenant = _tenantSetting.Tenants.FirstOrDefault(t => t.TID == claim.Value);

            if (tenant is null) throw new UnauthorizedAccessException($"Tenant '{claim.Value} is not registered.");

            return tenant;
        }
    }
}
