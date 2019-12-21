import { Controller, Post, Body, ValidationPipe, UseGuards, Req, Get, Query } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user-decorator';
import { Usuario } from './usuario.entity';
import { UsuarioDto } from './dto/usuario.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentials: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authCredentials);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentials: AuthCredentialsDto): Promise<{token: string}> {
        return this.authService.signIn(authCredentials);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@GetUser() user: Usuario) {
        console.log(user);
    }

    @Get()
    getUsuario(@Query(ValidationPipe) filtro: UsuarioDto): Promise<Usuario[]> {
        return this.authService.getUsuario(filtro);
    }
}   
