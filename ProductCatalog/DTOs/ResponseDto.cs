using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System.Net;

namespace ProductCatalog.DTOs
{
    public class ResponseDto
    {
        public int StatusCode { get; set; }
        public bool IsSuccess { get; set; }
        List<Error>? errors { get; set; }
    }

    public class ResponseDto<T> where T : class
    {
        public int StatusCode { get; set; }
        public bool IsSuccess { get; set; }
        public ICollection<Error>? Errors { get; set; } = new List<Error>();
        public T? Value { get; set; }

        public static ResponseDto<T> CreateSuccessResponse(int statusCode, bool isSuccess, T? value = null, string error = null)
        {
            return new ResponseDto<T>
            {
                StatusCode = statusCode,
                IsSuccess = isSuccess,
                Value = value,
                Errors = null
            };
        }

        public static ResponseDto<T> CreateSuccessResponse(T value)
        {
            return new ResponseDto<T>
            {
                StatusCode = StatusCodes.Status200OK,
                IsSuccess = true,
                Value = value,
                Errors = null
            };
        }

    }


    public class Error
    {
        public int StatusCode { get; set; }
        public string Message { get; set; } = string.Empty;
    }


}
