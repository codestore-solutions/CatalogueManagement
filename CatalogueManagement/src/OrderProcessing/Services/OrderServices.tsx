import { getApiData } from "../../CatalogueModule/Services/Axios";

class OrderServices{
    static async CreateOrder(add:number,cust:number,paymentID:number,paymentMode='credit card',orders:{pID:number,vID:number,price:number,disc:number,quant:number,gst:number}[]) {
        await getApiData('https://order-processing-dev.azurewebsites.net/api/v1/customer/createOrder','POST',
        {
            "shippingAddressId": add,
            "customerId": cust,
            "paymentId": paymentID,
            "paymentMode": paymentMode,
            "ordersFromStore": [
              {
                "storeId": 3,
                "deliveryCost": 99,
                "orderItems": orders
              }
            ]
          }
        )
    }
}

export default OrderServices;