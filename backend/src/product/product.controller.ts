import { ProductService } from './product.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('products')
export class ProductController {
    constructor(private readonly ProductService: ProductService) {}
    @Post()
    PostProduct(@Body() body: any){
        return this.ProductService.createProduct(body)
    }
}
