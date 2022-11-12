import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '../model/users.model';
import { UsersService } from '../service/users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('message')
  getSaludoUsers(): string {
    return this.usersService.getSaludoUsers();
  }

  @Get('')
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User | string {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: User): User | string {
    return this.usersService.createUser(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: User): User | string {
    return this.usersService.updateUser(id, user);
  }

  @Patch(':id')
  patchUser(@Param('id') id: string, @Body() user: User): User | string {
    return this.usersService.patchUser(id, user);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string): boolean {
    return this.usersService.deleteUserById(id);
  }
}
