import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { RegistryController } from './registry/registry.controller';
import { RegistryModule } from './registry/registry.module';
import { RegistratorModule } from './registrator/registrator.module';
import { AdminModule } from './admin/admin.module';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UserModule, RegistryModule, RegistratorModule, AdminModule, LoginModule],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
