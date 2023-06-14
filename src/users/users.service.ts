import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async createUser(user: Partial<User>): Promise<User> {
        return await this.userRepository.save(user);
    }

    async editUser(id: number, user: Partial<User>): Promise<User> {
        await this.userRepository.update(id, user);
        return await this.userRepository.findOneOrFail({ where: { id } });
    }

    async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getUserById(id: number): Promise<User> {
        return await this.userRepository.findOneOrFail({ where: { id }, relations: ['books'] });
    }
}