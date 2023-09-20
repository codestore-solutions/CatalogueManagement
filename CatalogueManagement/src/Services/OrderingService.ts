import {ApiDetails} from '../Constants/ApiDetails';
import Http from './HttpService';

class OrderingService {
  public static async getTimeSlots(businessId: string | undefined) {
    const url = `${ApiDetails.GET_ACTIVE_TIME_SLOTS}`;
    const response = await Http.get(url);
    return response;
  }
  public static async getAllAddress(userId: number) {
    const url = `${ApiDetails.GET_ALL_ADDRESS}?userId=${userId}`;
    const response = await Http.get(url);
    return response;
  }

  public static async createOrder(data: any) {
    const url = `${ApiDetails.CREATE_ORDER}`;
    const response = await Http.post(url, data);
    return response;
  }

  public static async getCart(userId: number) {
    const url = `${ApiDetails.GET_CART}?userId=${userId}`;
    const response = await Http.get(url);
    return response;
  }

  public static async addToCart(data: {
    userId: number;
    productId: number | string;
    variantId: number | string;
    quantity: number;
  }) {
    const url = `${ApiDetails.ADD_TO_CART}`;
    const response = await Http.post(url, data);
    return response;
  }
}

export default OrderingService;
