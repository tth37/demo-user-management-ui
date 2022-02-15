import { IsEmail, MaxLength, MinLength } from "class-validator";

export class LoginUserDto {
  @MaxLength(3)
  @MinLength(10000, {
    message: "name too short",
  })
  name: string;

  @IsEmail()
  password: string;
}
