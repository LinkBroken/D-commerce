import { Injectable } from '@nestjs/common';
import { addProduct } from 'src/utilities/helpers';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
export interface Product {
    title: string,
    price: number,
    image: string,
    description: string,
    user_id: number
}
@Injectable()

export class ProductService {
    constructor(private jwtService: JwtService) { }
    async createProduct(body: Product, req: Request) {
        const username = this.jwtService.decode(req.headers.authorization.split(" ")[1])
        const user_id = username["sub"]
        addProduct(body.title, body.price, body.image, body.description, user_id)
    }
}
