import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService, ErrorMessage } from './books.service';
import { data } from './books.service';
@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) {}
    @Get('all')
    getAllBooks(): data[] {
        return this.bookService.getAllBooks();
    }
    @Get(':id')
    getCertainBooks(@Param() params: any): string {
        console.log(params)
        return this.bookService.getCertainBook(params.id);
    }
    @Post()
    postCertainBooks(@Body() body: any ): string | ErrorMessage {
        return this.bookService.postCertainDBook(body);
    }
}
