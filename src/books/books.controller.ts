import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { BookService } from './books.service';
import { Book } from './books.entity';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {}

    @Post()
    addBook(@Body() book: Partial<Book>): Promise<Book> {
        return this.bookService.addBook(book);
    }

    @Post(':id/issue')
    issueBook(@Param('id') bookId: number, @Body('userId') userId: number): Promise<void> {
        return this.bookService.issueBook(userId, bookId);
    }

    @Post(':id/return')
    returnBook(@Param('id') bookId: number, @Body('userId') userId: number): Promise<void> {
        return this.bookService.returnBook(userId, bookId);
    }
}