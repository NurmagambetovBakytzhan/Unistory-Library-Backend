import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { User } from './users.entity';
import { Book } from '../books/books.entity';
import { Subscription } from '../subscriptions/subscriptions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Book, Subscription])],
  providers: [UserService],
  controllers: [UserController],
})
export class UsersModule {}