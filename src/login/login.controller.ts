import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor (private readonly loginSercice: LoginService){}

    @Post('/')
    async getToken(
        @Body('email') email: string,
        @Body('pass') pass: string
    ) : Promise<string>
    {
        return this.loginSercice.getToken(email, pass);
    }
}
