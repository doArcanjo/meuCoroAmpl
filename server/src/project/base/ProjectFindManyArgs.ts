import { ArgsType, Field } from "@nestjs/graphql";
import { ProjectWhereInput } from "./ProjectWhereInput";

@ArgsType()
class ProjectFindManyArgs {
  @Field(() => ProjectWhereInput, { nullable: true })
  where?: ProjectWhereInput;
}

export { ProjectFindManyArgs };
