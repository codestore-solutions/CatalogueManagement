import { getApiData } from "./Axios";

class UserServices{
    public static async getCart(){
        let res = await getApiData('https://app-orderbooking-dev.azurewebsites.net/api/v1/cart?userId=5','GET')
        .then(res => {return res});
        return res;
    }

    //ADD ITEM TO CART
    public static async addToCart(id:string|number,vid:string|number,qty:number|string){
        await getApiData('https://app-orderbooking-dev.azurewebsites.net/api/v1/cart/add','POST',
        {
            "productId"       : id,
            "varientId"       : vid,
            "userId"          : 5,
            "productQuantity" : qty
         }
        );
    }

    
    public static async remove(id:string|number){
        await getApiData(`https://app-orderbooking-dev.azurewebsites.net/api/v1/cart/delete?productId=${id}&userId=${5}`,'DELETE')
    }
    
    public static async getWishlist(userId:number|string){
        const data = await getApiData(`https://app-orderbooking-dev.azurewebsites.net/api/v1/wishList?userId=${userId}`,'GET')
        .then(res => {return res});
    }
}



  export default UserServices;