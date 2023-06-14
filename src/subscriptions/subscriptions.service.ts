import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './subscriptions.entity';
import { User } from '../users/users.entity';

@Injectable()
export class SubscriptionService {
    constructor(
        @InjectRepository(Subscription)
        private subscriptionRepository: Repository<Subscription>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async createSubscription(userId: number, subscription: Partial<Subscription>): Promise<Subscription> {
        const user = await this.userRepository.findOneOrFail({ where: { id: userId }, relations: ['subscription'] });
        const newSubscription = this.subscriptionRepository.create(subscription);
        newSubscription.user = user;
        return await this.subscriptionRepository.save(newSubscription);
    }
}