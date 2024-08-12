import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { findByName, findProductByUser, removeProductByUser } from 'src/utilities/helpers';

@Injectable()
export class CartService {
    constructor(private jwtService: JwtService) { }
    async getCart(req: any) {
        try {
            const username = this.jwtService.decode(req.get("authorization").split(" ")[1])?.name
            const user = await findByName(username)
            const cart = await findProductByUser(user[0]?.id)
            cart ? console.log(cart) : new UnauthorizedException("No Data to show")
            return cart
        }
        catch (err) {
            throw err
        }

    }
    async removeItem(req: Request) {
        try {
            const userId = this.jwtService.decode(req.get("authorization").split(" ")[1])?.sub
            const product = req.get("name");
            removeProductByUser(userId, product)

        }
        catch (err) {
            throw err
        }
    }
}
