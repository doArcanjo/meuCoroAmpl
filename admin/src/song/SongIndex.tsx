import * as React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { SongList } from "./SongList";
import { CreateSong } from "./CreateSong";
import { ViewSong } from "./ViewSong";

export const SongIndex = (): React.ReactElement => {
  useBreadcrumbs("/songs/", "Songs");

  return (
    <Switch>
      <PrivateRoute exact path={"/songs/"} component={SongList} />
      <PrivateRoute path={"/songs/new"} component={CreateSong} />
      <PrivateRoute path={"/songs/:id"} component={ViewSong} />
    </Switch>
  );
};
