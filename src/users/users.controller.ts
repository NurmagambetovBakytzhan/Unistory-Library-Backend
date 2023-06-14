import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { User } from '../users/users.entity';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    createUser(@Body() user: Partial<User>): Promise<User> {
        return this.userService.createUser(user);
    }

    @Put(':id')
    editUser(@Param('id') id: number, @Body() user: Partial<User>): Promise<User> {
        return this.userService.editUser(id, user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): Promise<void> {
        return this.userService.deleteUser(id);
    }

    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: number): Promise<User> {
        return this.userService.getUserById(id);
    }
}