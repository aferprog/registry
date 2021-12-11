import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async getUser(): Promise<string>{
        return 'gfjkvc user'
    }
}
