using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TenantMicroservice.TenantService.Options
{
    public class TenantSetting : ITenantSetting
    {
        public Configration Defaults { get; set; }
        public List<Tenant> Tenants { get; set; }
    }

    public class Tenant
    {
        public string Name { get; set; }
        public string TID { get; set; }
        public string ConnectionString { get; set; }
    }

    public class Configration
    {
        public string DBProvider { get; set; }
        public string ConnectionString { get; set; }
    }
}
