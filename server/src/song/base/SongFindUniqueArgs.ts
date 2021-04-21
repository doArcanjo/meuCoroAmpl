import { ArgsType, Field } from "@nestjs/graphql";
import { SongWhereUniqueInput } from "./SongWhereUniqueInput";

@ArgsType()
class SongFindUniqueArgs {
  @Field(() => SongWhereUniqueInput, { nullable: false })
  where!: SongWhereUniqueInput;
}

export { SongFindUniqueArgs };
