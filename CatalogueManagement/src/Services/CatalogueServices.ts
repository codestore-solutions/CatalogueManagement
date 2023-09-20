import {ApiDetails} from '../Constants/ApiDetails';
import Http from './HttpService';

class CatalogueServices {
  public static async getProductDetail(productId: string | number) {
    const url = `${ApiDetails.GET_PRODUCT_DETAIL}/${productId}`;
    const response = await Http.get(url);
    return response;
  }
}
export default CatalogueServices;
