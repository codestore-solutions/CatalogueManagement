using ProductCatalog.DTOs;

namespace ProductCatalog.Service.Interface
{
    public interface IAccountService
    {
        string SignIn(SignInArgs signInArgs);
    }
}
