import { ArgsType, Field } from "@nestjs/graphql";
import { UserWhereInput } from "./UserWhereInput";

@ArgsType()
class UserFindManyArgs {
  @Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput;
}

export { UserFindManyArgs };
