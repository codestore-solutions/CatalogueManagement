//using DataAccessLayer.Data;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.Configuration;
//using Microsoft.Extensions.DependencyInjection;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using TenantMicroservice.TenantService;
//using TenantMicroservice.TenantService.Options;

//namespace DataAccessLayer.Extensions
//{
//    public static class ServiceCollectionExtensions
//    {
//        public static IServiceCollection AddAndMigrateTenantDatabase(this IServiceCollection services, IConfiguration configuration)
//        {
//            var options = services.GetOptions<TenantSetting>(nameof(TenantService));
//            var defaultConnectionString = options.Defaults.ConnectionString;
//            var defaultDbProvider = options.Defaults.DBProvider;
//            if(defaultDbProvider.ToLower() == "mssql")
//            {
//                services.AddDbContext<ProductDbContext>(x => x.UseSqlServer(e => e.MigrationsAssembly(typeof(ProductDbContext).Assembly.FullName)));
//            }
//            var tenants = options.Tenants;
//            foreach (var item in tenants)
//            {
//                string connectionString;
//                if (string.IsNullOrWhiteSpace(item.ConnectionString))
//                {
//                    connectionString = defaultConnectionString;
//                }
//                else
//                {
//                    connectionString = item.ConnectionString;
//                }
//                using var scope = services.BuildServiceProvider().CreateScope();
//                var dbContext = scope.ServiceProvider.GetRequiredService<ProductDbContext>();
//                dbContext.Database.SetConnectionString(connectionString);
//                if(dbContext.Database.GetMigrations().Count() > 0)
//                {
//                    dbContext.Database.Migrate();
//                }
//            }
//            return services;
//        }

//        public static T GetOptions<T>(this IServiceCollection services, string sectionName) where T : new()
//        {
//            using var serviceProvider = services.BuildServiceProvider();
//            var configuration = serviceProvider.GetRequiredService<IConfiguration>();
//            var section = configuration.GetSection(sectionName);
//            var options = new T();
//            section.Bind(options);
//            return options;
//        }
//    }
//}
