import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { randomUUID } from 'crypto';
import { UserInterface } from '../interface/user.interface';

export class UserDto implements UserInterface {
  uuid: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  lastName: string | undefined;

  @IsString()
  @IsNotEmpty()
  email: string;

  constructor(name: string, email: string, lastName?: string) {
    this.uuid = randomUUID();
    this.name = name;
    this.email = email;
    this.lastName = lastName;
  }
}

export class UserPatchDto implements UserInterface {
  uuid: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  lastName: string | undefined;

  @IsString()
  @IsOptional()
  email: string;
}
