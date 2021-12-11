import { Injectable } from '@nestjs/common';
import { database } from 'src/database/database';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class LoginService {
    constructor(
        private jwtService: JwtService
      ) {}
    
    getToken(email: String, pass: String): String{
        const user = database.getUser(email, pass);
        if (user) return this.jwtService.sign(user);
        else return null;
    }

}
