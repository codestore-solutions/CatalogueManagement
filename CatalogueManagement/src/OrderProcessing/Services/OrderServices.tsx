import {getApiData} from '../../CatalogueModule/Services/Axios';
import {Ordertoken, userID} from '../../Constants/consts';

class OrderServices {
  static async CreateOrder(
    orders: {
      vendorId: number;
      deliveryCharges: number;
      deliverySlotTime:'08:00 AM to 10:00 AM';
      orderItems: {
        productId: number;
        varientId: number;
        price: number;
        discount: number;
        quantity: number;
        orderStatus: number;
      }[];
    }[],
  ) {
    await getApiData(
      'https://app-orderbooking-dev.azurewebsites.net/api/v1/order/create-order',
      'POST',
      {
        userId: 5,
        createdDate: '2023-07-04T15:20:54.474Z',
        ordersForVendors: orders,
        paymentId: 0,
        shipingAddressId: 0,
        paymentMode: 1,
        paymentStatus: 0,
      },
    )
      .then(res => {
        console.log('Order Placed::');
        
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async GetOrders(page: number, size = 10) {
    let res = await getApiData(
      `https://order-processing-dev.azurewebsites.net/api/v1/customer/getOrdersByCustomerId/${userID}?page=${page}&pageSize=${size}`,
      'GET',
      {
        headers: {
          Authorization: 'Bearer ' + Ordertoken,
        },
      },
    )
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });

    return res;
  }

  static async GetOrderTimeline(orderID: number) {
    let res = await getApiData(
      `https://order-processing-dev.azurewebsites.net/api/v1/order/getOrderTimeline/${orderID}`,
      'GET',
      {
        headers: {
          Authorization: 'Bearer ' + Ordertoken,
        },
      },
    )
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });

    return res;
  }

  static async getOrderDetails(id: number) {
    let res = await getApiData(
      `https://app-orderbooking-dev.azurewebsites.net/api/v1/order/listOfOrders?orderIds=${id}`,
      'GET',
    )
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });

    return res;
  }
}

export default OrderServices;
