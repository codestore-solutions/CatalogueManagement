import services from '../../JSON/services.json';
import {getApiData} from './Axios';

class ProductServices {
  
  //TO FETCH ALL THE PRODUCTS OF A PERTICULAR CATEGORY
  public static async getAllProducts(category: string) {
    switch (category) {
      case 'Apparels': {
        let res = await getApiData(
          'https://fakestoreapi.com/products',
          'GET',
        ).then(res => {return res})
        return res;
      }
      default: {
        return {data:services};
      }
    }
  }

  //GET A SINGLE PRODUCT WITH THE PRODUCT ID
  public static async getProduct(prodId: string) {
    const res = await getApiData(
      `https://fakestoreapi.com/products/${prodId}`,
      'GET',
    );
    return res;
  }


  //GET CART OF A USER WITH USER ID
  public static async getCart(userID: string) {
    const res = await fetch(
      'https://app-orderingbooking-dev.azurewebsites.net/api/orderLineItems',
    )
      .then(res => {
        return res.json();
      })
      .catch(err => console.log(err));
    return res;
  }

  public static async addToWishlist(prodId:string,userID="17175963-5b43-4e6b-a8d3-4c8d2f9fe4ed"){
    await getApiData(
      'https://app-orderingbooking-dev.azurewebsites.net/api/wishList',
      'POST',
      {
        "userId": "17175963-5b43-4e6b-a8d3-4c8d2f9fe4ed",
        "productId": prodId+"b3629d1-efbb-47fd-99a5-18157b9a4624"
      }
    )
  }

  //GET WISHLIST OF A USER WITH USER ID
  public static async getWishlist(userID="17175963-5b43-4e6b-a8d3-4c8d2f9fe4ed"){
    const res = await getApiData(
      `https://app-orderingbooking-dev.azurewebsites.net/api/wishList/userId?userId=${userID}`,
      'GET'
    ).then(res => {return res}
    ).catch()
    return res;
  }
}

export default ProductServices;
