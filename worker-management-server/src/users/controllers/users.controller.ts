import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
    Delete,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dtos';
import  { UsersService } from '../services/users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }
    
    @Get('id/:id')
    findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUsersById(id);
    }
    
    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Delete('id/:id')
    deleteUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUserById(id);
    }
}