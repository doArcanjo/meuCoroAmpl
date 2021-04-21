import { Module } from "@nestjs/common";
import { SongModuleBase } from "./base/song.module.base";
import { SongService } from "./song.service";
import { SongController } from "./song.controller";
import { SongResolver } from "./song.resolver";

@Module({
  imports: [SongModuleBase],
  controllers: [SongController],
  providers: [SongService, SongResolver],
  exports: [SongService],
})
export class SongModule {}
