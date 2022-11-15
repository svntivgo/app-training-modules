import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { UserDto, UserPatchDto } from '../model/user.dto';
import { UsersService } from '../service/users.service';
import { HttpExceptionFilter } from '../../../filters/dto.filter';
import { AuthGuard } from 'src/guards/token.guard';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('message')
  getSaludoUsers() {
    return this.usersService.getSaludoUsers();
  }

  @Get('')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  @UseFilters(new HttpExceptionFilter())
  createUser(@Body() user: UserDto) {
    return this.usersService.createUser(user);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @UseFilters(new HttpExceptionFilter())
  updateUser(@Param('id') id: string, @Body() user: UserDto) {
    return this.usersService.updateUser(id, user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @UseFilters(new HttpExceptionFilter())
  patchUser(@Param('id') id: string, @Body() user: UserPatchDto) {
    return this.usersService.patchUser(id, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteUserById(@Param('id') id: string) {
    return this.usersService.deleteUserById(id);
  }
}
