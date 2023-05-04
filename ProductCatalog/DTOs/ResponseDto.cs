using System.Net;

namespace ProductCatalog.DTOs
{
    public class ResponseDto
    {
        public HttpStatusCode StatusCode;
        public bool IsSuccess;
        public object? Errors;
        public object? Result;
    }
}
