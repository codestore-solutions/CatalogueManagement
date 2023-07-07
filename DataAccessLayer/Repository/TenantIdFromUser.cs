using DataAccessLayer.Interface;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace DataAccessLayer.Repository
{
    public class TenantIdFromUser : ITenantIdFromUser
    {
        public string? TenantId { get; set; }
        public TenantIdFromUser(IHttpContextAccessor accessor)
        {

            TenantId = accessor.HttpContext?.User?.Claims.Where(c => c.Type == "tenantId")?.Select(x => x.Value).FirstOrDefault();
        }

    }
}
