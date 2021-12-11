import { Module } from '@nestjs/common';
import { RegistratorController } from './registrator.controller';
import { RegistratorService } from './registrator.service';

@Module({
  controllers: [RegistratorController],
  providers: [RegistratorService]
})
export class RegistratorModule {}
