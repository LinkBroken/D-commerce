import { AuthGuard } from 'src/auth/auth.guard';
import { ProductService } from './product.service';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';

@Controller('products')
// @UseGuards(AuthGuard)
export class ProductController {
    constructor(private readonly ProductService: ProductService) {}
    @Post()
    PostProduct(@Body() body: any, @Req() req: any) {
        return this.ProductService.createProduct(body,req)
    }
}
