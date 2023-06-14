import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionService } from './subscriptions.service';
import { SubscriptionController } from './subscriptions.controller';
import { Subscription } from './subscriptions.entity';
import { User } from '../users/users.entity';
import { Book } from '../books/books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subscription, User, Book])],
  providers: [SubscriptionService],
  controllers: [SubscriptionController],
})
export class SubscriptionsModule {}