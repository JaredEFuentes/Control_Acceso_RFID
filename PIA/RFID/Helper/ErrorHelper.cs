using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RFID.Helper
{
    public class ErrorHelper
    {
        public static ResponseObject Response(int StatusCode, string Message)
        {
            return new ResponseObject()
            {
                Type = "C",
                StatusCode = StatusCode,
                Message = Message
            };

        }
        public static List<ModelErrors> GetModelStateErrors(ModelStateDictionary Model)
        {
            return Model.Select(x => new ModelErrors()
            {
                Type = "M",
                key = x.Key,
                Messages = x.Value.Errors.Select(y => y.ErrorMessage).ToList()
            }).ToList();
        }
        
    }
    public class ModelErrors
    {
        public string key { get; set; }
        public List<string> Messages { get; set; }
        public string Type { get; set; }
    }

    public class ResponseObject
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string Type { get; set; }
    }
}
