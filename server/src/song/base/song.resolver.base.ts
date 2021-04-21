import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { DeleteSongArgs } from "./DeleteSongArgs";
import { SongFindManyArgs } from "./SongFindManyArgs";
import { SongFindUniqueArgs } from "./SongFindUniqueArgs";
import { Song } from "./Song";
import { SongService } from "../song.service";

@graphql.Resolver(() => Song)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class SongResolverBase {
  constructor(
    protected readonly service: SongService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => [Song])
  @nestAccessControl.UseRoles({
    resource: "Song",
    action: "read",
    possession: "any",
  })
  async songs(
    @graphql.Args() args: SongFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Song[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Song",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Song, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Song",
    action: "read",
    possession: "own",
  })
  async song(
    @graphql.Args() args: SongFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Song | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Song",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Song)
  @nestAccessControl.UseRoles({
    resource: "Song",
    action: "delete",
    possession: "any",
  })
  async deleteSong(@graphql.Args() args: DeleteSongArgs): Promise<Song | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
