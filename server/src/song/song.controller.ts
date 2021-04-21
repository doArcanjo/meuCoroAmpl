import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SongService } from "./song.service";
import { SongControllerBase } from "./base/song.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("songs")
@common.Controller("songs")
export class SongController extends SongControllerBase {
  constructor(
    protected readonly service: SongService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
