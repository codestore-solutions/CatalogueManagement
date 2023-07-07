using ProductCatalog.DTOs;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Service
{
    public class AccountService : IAccountService
    {
        private readonly List<User> users;
        public AccountService()
        {
            users = new List<User>{
                new User
                {
                    Id = "T1",
                    Name = "Rajiv Kumar",
                    Email = "rajiv.kumar@example.com",
                    Role = "admin",
                    Password = "password123",
                    Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6IlQxIiwiZXhwIjoxNjkxMTM2NTkwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTM3IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEzNyJ9.mcNjnnKYGjq7iqbLgUQ8bwKQfp-oZ7dpFnFVrgChniQ"
                },new User
                {
                    Id = "T2",
                    Name = "Aman Shah",
                    Email = "aman.shah@example.com",
                    Role = "user",
                    Password = "password123",
                    Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6IlQyIiwiZXhwIjoxNjkxMTM2Nzc2LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTM3IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEzNyJ9.-2LQXkF9ha9iLT6G_qaFwLkgfNIS-Zd7JezHcMCD-Ng"
                },new User
                {
                    Id = "T3",
                    Name = "Ratnesh Chaudhary",
                    Email = "ratnesh.chaudhary@example.com",
                    Role = "user",
                    Password = "password123",
                    Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6IlQzIiwiZXhwIjoxNjkxMTM2ODk3LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTM3IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEzNyJ9.uH2aRZ8efKfkOtHQA-rXpcniGB-DMnBtFnmwciVrVwg"
                },new User
                {
                    Id = "T4",
                    Name = "Kamlesh Raj",
                    Email = "kamlesh.raj@example.com",
                    Role = "user",
                    Password = "password123",
                    Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6IlQ0IiwiZXhwIjoxNjkxMTM2OTg3LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTM3IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEzNyJ9.GinVqqDAq5Ec4GmkSyZmsIy2Knk4dV2UCf2RFeqhipU"
                },new User
                {
                    Id = "T5",
                    Name = "Ramesh Kapoor",
                    Email = "ramesh.kapoor@example.com",
                    Role = "user",
                    Password = "password123",
                    Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6IlQ1IiwiZXhwIjoxNjkxMTM3MDkxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTM3IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEzNyJ9.fK0SC5hWwiIQ61zOCh1CoCAlik_VMcMov1gR58UxHmI"
                },new User
                {
                    Id = "T6",
                    Name = "Kapil Prasad",
                    Email = "kapil.prasad@example.com",
                    Role = "user",
                    Password = "password123"
                },new User
                {
                    Id = "T7",
                    Name = "Omkar Sharma",
                    Email = "omkar.sharma@example.com",
                    Role = "user",
                    Password = "password123"
                }
            };  
        }
        public string SignIn(SignInArgs signInArgs)
        {
            if (signInArgs == null)
                return string.Empty;
            var user = users.FirstOrDefault(u => u.Email == signInArgs.Email && u.Password == signInArgs.Password);
            if (user != null)
            {
                return user.Token;
            }
            return string.Empty;
        }

       
    }
}
