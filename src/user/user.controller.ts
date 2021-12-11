import { Body, Controller, Get, HttpCode, Param, Query, Redirect } from '@nestjs/common';
import { UserService } from './user.service';

interface UserBody {
  name: string;
  id: number;
  age: number;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getUser(): Promise<string> {
    const asdf = await this.userService.getUser();
    return asdf;
  }
  @Get(':id/history')
  async getUser2(
    @Param('id') idStr: string,
    @Query('date') datestr: string | undefined,
  ): Promise<string> {
    if (datestr) return idStr + '  ' + datestr;
    else return 'haha  ' + idStr;
  }

  @Get('body')
  @Redirect('https://docs.nestjs.com', 500)
  async getUser3(@Body('user') userDate: UserBody): Promise<string> {
    if (userDate.id === 3) return userDate.id.toString();
    else throw new Error('rtyuio');
  }
}
