import { ArgsType, Field } from "@nestjs/graphql";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";

@ArgsType()
class ProjectFindUniqueArgs {
  @Field(() => ProjectWhereUniqueInput, { nullable: false })
  where!: ProjectWhereUniqueInput;
}

export { ProjectFindUniqueArgs };
