import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor (private readonly loginSercice: LoginService){}

    @Post('/')
    async getToken(
        @Body('email') email: String,
        @Body('pass') pass: String
    ) : Promise<String>
    {
        return this.loginSercice.getToken(email, pass);
    }
}
