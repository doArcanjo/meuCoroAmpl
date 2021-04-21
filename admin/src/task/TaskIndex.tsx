import * as React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { TaskList } from "./TaskList";
import { CreateTask } from "./CreateTask";
import { ViewTask } from "./ViewTask";

export const TaskIndex = (): React.ReactElement => {
  useBreadcrumbs("/tasks/", "Tasks");

  return (
    <Switch>
      <PrivateRoute exact path={"/tasks/"} component={TaskList} />
      <PrivateRoute path={"/tasks/new"} component={CreateTask} />
      <PrivateRoute path={"/tasks/:id"} component={ViewTask} />
    </Switch>
  );
};
