import { Controller, Get, Head, Param, Request, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService){}

    @UseGuards(AuthGuard)
    @Get()
    async getCart(@Request() req) {
        return this.cartService.getCart(req)
    }
}
