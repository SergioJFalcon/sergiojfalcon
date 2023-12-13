import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDTO } from './dtos/create-user-dto';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    // Check if username or email already exists
    const usernameExists = await this.userModel.findOne({
      username: createUserDTO.username,
    });
    if (usernameExists) {
      throw new ConflictException('username already exists');
    }
    const emailExists = await this.userModel.findOne({
      email: createUserDTO.email,
    });
    if (emailExists) {
      throw new ConflictException('email already exists');
    }

    const newUser = new this.userModel(createUserDTO);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    return newUser.save();
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username: username });
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email: email });
    return user;
  }

  async deleteUser(id: string): Promise<any> {
    const deleteUser = await this.userModel.findByIdAndDelete(id);
    return deleteUser;
  }
}
