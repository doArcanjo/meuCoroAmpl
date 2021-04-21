import { ArgsType, Field } from "@nestjs/graphql";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";

@ArgsType()
class TaskFindUniqueArgs {
  @Field(() => TaskWhereUniqueInput, { nullable: false })
  where!: TaskWhereUniqueInput;
}

export { TaskFindUniqueArgs };
