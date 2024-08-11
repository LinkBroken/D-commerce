import { Injectable } from '@nestjs/common';

export interface Product {
    title: string,
    price: number,
    image: string,
    description: string,
    user_id: number
}
@Injectable()
export class ProductService {
    async createProduct( body: Product){
        console.log(body)
        return body
    }
}
