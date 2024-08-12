import { Controller, Delete, Get, Request, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request as request} from 'express';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService){}

    @UseGuards(AuthGuard)
    @Get()
    async getCart(@Request() req:request) {
        return this.cartService.getCart(req)
    }

    @Delete("/del")
    async removeItem(@Request() req:request){
        return this.cartService.removeItem(req)

    }
}
