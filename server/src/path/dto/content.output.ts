import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field()
  name: string;

  @Field()
  path: string;

  @Field(() => Boolean)
  isDirectory: boolean;

  @Field({ nullable: true })
  extension: string;
}
