import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Path {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
