import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/index';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dtos/CreateUser.dtos';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  createUser(CreateUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(CreateUserDto);
    return this.userRepository.save(newUser);
  }

  findUsersById(userId: number) {
    return this.userRepository.find({where: {id: userId}});
  }

  deleteUserById(userId: number) {
    return this.userRepository.delete(userId);
  }

  getUsers() {
    // return this.userRepository.find(undefined);
    return {mes: "I am version three!! "};

  }
}
