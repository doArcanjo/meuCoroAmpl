import { ArgsType, Field } from "@nestjs/graphql";
import { TaskWhereInput } from "./TaskWhereInput";

@ArgsType()
class TaskFindManyArgs {
  @Field(() => TaskWhereInput, { nullable: true })
  where?: TaskWhereInput;
}

export { TaskFindManyArgs };
