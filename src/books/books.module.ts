import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './books.service';
import { BookController } from './books.controller';
import { Book } from './books.entity';
import { User } from '../users/users.entity';
import { Subscription } from '../subscriptions/subscriptions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, User, Subscription])],
  providers: [BookService],
  controllers: [BookController],
})
export class BooksModule {}