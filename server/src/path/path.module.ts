import { Module } from '@nestjs/common';
import { PathService } from './path.service';
import { PathResolver } from './path.resolver';

@Module({
  providers: [PathResolver, PathService],
})
export class PathModule {}
