import { ArgsType, Field } from "@nestjs/graphql";
import { SongWhereUniqueInput } from "./SongWhereUniqueInput";

@ArgsType()
class DeleteSongArgs {
  @Field(() => SongWhereUniqueInput, { nullable: false })
  where!: SongWhereUniqueInput;
}

export { DeleteSongArgs };
