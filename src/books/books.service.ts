import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './books.entity';
import { User } from '../users/users.entity';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async addBook(book: Partial<Book>): Promise<Book> {
        return await this.bookRepository.save(book);
    }

    async issueBook(userId: number, bookId: number): Promise<void> {
        const user = await this.userRepository.findOneOrFail({ where: { id: userId }, relations: ['books'] });
        const book = await this.bookRepository.findOneOrFail({ where: { id: bookId }, relations: ['users'] });

        if (user.books.length < 5 && user.subscription && !book.users.length) {
            user.books.push(book);
            await this.userRepository.save(user);
        }
    }

    async returnBook(userId: number, bookId: number): Promise<void> {
        const user = await this.userRepository.findOneOrFail({ where: { id: userId }, relations: ['books'] });
        user.books = user.books.filter((book) => book.id !== bookId);
        await this.userRepository.save(user);
    }
}