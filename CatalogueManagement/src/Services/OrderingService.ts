import {ApiDetails} from '../Constants/ApiDetails';
import Http from './HttpService';

class OrderingService {
  public static async getTimeSlots(businessId: string | undefined) {
    const url = `${ApiDetails.GET_ACTIVE_TIME_SLOTS}`;
    const response = await Http.get(url);
    return response;
  }
}

export default OrderingService;
