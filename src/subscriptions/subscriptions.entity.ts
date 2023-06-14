import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class Subscription {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @OneToOne(() => User, (user) => user.subscription)
    user: User;
}