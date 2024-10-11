import { Resolver, Query, Args } from '@nestjs/graphql';
import { PathService } from './path.service';
import { Item } from './dto/content.output';

@Resolver()
export class PathResolver {
  constructor(private readonly pathService: PathService) {}

  @Query(() => [Item], { name: 'content' })
  content(@Args('path', { type: () => String }) path: string) {
    return this.pathService.getContent(path);
  }
}
