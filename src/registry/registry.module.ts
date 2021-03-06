import { Module } from '@nestjs/common';
import { RegistryService } from './registry.service';
import { RegistryController } from './registry.controller';

@Module({
  imports: [],
  providers: [RegistryService],
  controllers: [RegistryController],
  exports: [RegistryService],
})
export class RegistryModule {}
