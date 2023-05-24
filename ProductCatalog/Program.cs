using DataAccessLayer.Data;
using DataAccessLayer.Interface;
using DataAccessLayer.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Tokens;
using ProductCatalog.Service;
using ProductCatalog.Service.Interface;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<ProductDbContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddLogging(loggingBuilder =>
{
    loggingBuilder.AddSeq();   
});

builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(t =>
{

    var key = Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"]);
    t.SaveToken = true;
    t.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = false,
        SignatureValidator = delegate (string token, TokenValidationParameters parameters)
        {
            var jwt = new JwtSecurityToken(token);

            return jwt;
        },
        ValidIssuer = builder.Configuration["JWT:Issuer"],
        ValidAudience = builder.Configuration["JWT:Audience"],
        //IssuerSigningKey = new SymmetricSecurityKey(key)
    };
});

//builder.Services.AddAuthentication().AddJwtBearer();


//option =>
//{
//    option.UseSqlServer(o => o.MigrationsAssembly(typeof(ProductDbContext).Assembly.FullName));
//}

builder.Services.AddHttpContextAccessor();
builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IBrandService, BrandService>();
builder.Services.AddScoped<IAttachmentService, AttachmentService>();
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<IReviewService, ReviewService>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<ISubCategoryService, SubCategoryService>();
builder.Services.AddScoped<IVarientService, VarientService>();

//builder.Services.Configure<TenantSetting>(config)


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpLogging();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
