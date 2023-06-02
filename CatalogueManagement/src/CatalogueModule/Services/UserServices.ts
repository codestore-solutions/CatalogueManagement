class UserServices{
    public static getCart(){
        return Cart;
    }

    //ADD ITEM TO CART
    public static addToCart(id:string){
       if(Cart[id]==undefined){
        Cart[id]=1;
       }
       else{Cart[id]++;}
    }
    public static setCart(id:string,quantity:number){
        Cart[id]=quantity;
    }
    public static getCartItem(index:number){
        
    }
    public static reove(id:string){
        delete Cart[id];
    }
    public static getQuant(id:string){
        if(Cart[id]==undefined){
            return 0;
        }
        return Cart[id];
    }
}

const Cart:{[id:string]:number} = {};

  export default UserServices;