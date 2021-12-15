import { Injectable } from '@nestjs/common';
import { database } from 'src/database/database';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class LoginService {
    constructor(
        private jwtService: JwtService
      ) {}
    
    async getToken(email: string, pass: string): Promise<string>{
        const user = await database.getUser(email, pass);
        if (user) return this.jwtService.sign(user);
        else return null;
    }

}
