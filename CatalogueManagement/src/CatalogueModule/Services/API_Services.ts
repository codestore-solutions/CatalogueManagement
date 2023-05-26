import categories from '../../JSON/categories.json';
import adbanner from '../../JSON/adBanner.json';
import homescreen from '../../JSON/home.json'

class API {
  // public static getProductDetails(prodID: number | string) {
  //   const data = {
  //     category: 'Electronics',
  //     subCategory: 'Mobile',
  //     Name: 'Google Pixel 6a (Charcoal, 128 GB) (6 GB RAM)',
  //     Varients: [
  //       {
  //         description:
  //           'Experience intuitiveness and enjoy seamless operation with smooth transition with the 5G-ready Google Pixel 6a that comes bundled with a myriad of innovative features.',
  //         price: '₹27,999',
  //         available: true,
  //         rating: 4.5,
  //       },
  //     ],
  //     Attachment: [
  //       'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70',
  //       'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/9/t/-original-imaggbrb3gyagad8.jpeg?q=70',
  //       'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/y/b/t/-original-imaggbrbkxzra38y.jpeg?q=70',
  //       'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/s/c/-original-imaggbrb42866wgx.jpeg?q=70',
  //       'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/p/l/m/-original-imaggbrbkzgzffez.jpeg?q=70',
  //     ],
  //   };
  //   return data;
  // }

  public static getCategories() {
    return categories;
  }

  public static getAdBanner(){
    return adbanner;
  }

  public static getHomeScreen(){
    return homescreen;
  }
}

export default API;
