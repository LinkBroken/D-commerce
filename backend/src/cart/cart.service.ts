import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { findByName, findProductByUser } from 'src/prisma';

@Injectable()
export class CartService {
    constructor(private jwtService: JwtService) {}
    async getCart(req:any) {
        const username = this.jwtService.decode(req.get("authorization").split(" ")[1])?.name
        const user = await findByName(username)
        const cart = await findProductByUser(user[0]?.id)
        cart?  console.log(cart) : console.log("No cart items")
        return cart;
    }
}
