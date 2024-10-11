import { Test, TestingModule } from '@nestjs/testing';
import { PathResolver } from './path.resolver';
import { PathService } from './path.service';

describe('PathResolver', () => {
  let resolver: PathResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PathResolver, PathService],
    }).compile();

    resolver = module.get<PathResolver>(PathResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
