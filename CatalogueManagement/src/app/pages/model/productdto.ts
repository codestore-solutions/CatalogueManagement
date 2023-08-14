export interface ProductDTO {
    id: number;
    name: string;
    attachment: string;
    stock:number;
    date:string;
    category:string;
    brand:string;
    price: number;
    rating:number;
}

export class VarientDTO{
    variendID: string;
    productID: string;
    title: string;
    description: string;
    image: string;
}
export class ProductsLists{
    records:ProductDTO[];
    totalCount:number;
}