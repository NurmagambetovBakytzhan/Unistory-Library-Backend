import { Controller, Post, Param, Body } from '@nestjs/common';
import { SubscriptionService } from './subscriptions.service';
import { Subscription } from './subscriptions.entity';

@Controller('subscriptions')
export class SubscriptionController {
    constructor(private subscriptionService: SubscriptionService) {}

    @Post('user/:userId')
    createSubscription(@Param('userId') userId: number, @Body() subscription: Partial<Subscription>): Promise<Subscription> {
        return this.subscriptionService.createSubscription(userId, subscription);
    }
}