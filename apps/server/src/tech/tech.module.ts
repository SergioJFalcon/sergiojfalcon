import { Module } from '@nestjs/common';
import { TechService } from './tech.service';

@Module({
  providers: [TechService]
})
export class TechModule {}
