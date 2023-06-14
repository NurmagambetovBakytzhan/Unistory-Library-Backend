import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { Subscription } from '../subscriptions/subscriptions.entity';
import { Book } from '../books/books.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => Subscription, (subscription) => subscription.user)
    subscription: Subscription;

    @ManyToMany(() => Book, (book) => book.users)
    @JoinTable()
    books: Book[];
}