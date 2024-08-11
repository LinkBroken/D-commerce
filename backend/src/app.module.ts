import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [BooksModule, AuthModule, ProductModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
