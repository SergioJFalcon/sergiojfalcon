import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '@server/user/user.service';
import { CreateUserDTO } from '@server/user/dtos/create-user-dto';
import { LoginDTO } from './dto/login-dto';
import { RefreshJwtGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  async registerUser(@Body() dto: CreateUserDTO) {
    return await this.userService.create(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDTO) {
    return await this.authService.login(dto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req: any) {
    console.log('refreshed');

    return await this.authService.refreshToken(req.user);
  }
}
