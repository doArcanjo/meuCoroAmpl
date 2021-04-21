import { ArgsType, Field } from "@nestjs/graphql";
import { SongWhereInput } from "./SongWhereInput";

@ArgsType()
class SongFindManyArgs {
  @Field(() => SongWhereInput, { nullable: true })
  where?: SongWhereInput;
}

export { SongFindManyArgs };
