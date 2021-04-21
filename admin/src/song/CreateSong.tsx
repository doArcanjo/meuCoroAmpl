import * as React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { Formik } from "formik";
import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
} from "@amplication/design-system";
import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { Song as TSong } from "../api/song/Song";
import { SongCreateInput } from "../api/song/SongCreateInput";

const INITIAL_VALUES = {} as SongCreateInput;

export const CreateSong = (): React.ReactElement => {
  useBreadcrumbs("/songs/new", "Create Song");
  const history = useHistory();

  const [create, { error, isError, isLoading }] = useMutation<
    TSong,
    AxiosError,
    SongCreateInput
  >(
    async (data) => {
      const response = await api.post("/api/songs", data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push(`${"/songs"}/${data.id}`);
      },
    }
  );
  const handleSubmit = React.useCallback(
    (values: SongCreateInput) => {
      void create(values);
    },
    [create]
  );
  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form
          formStyle={EnumFormStyle.Horizontal}
          formHeaderContent={
            <FormHeader title={"Create Song"}>
              <Button type="submit" disabled={isLoading}>
                Save
              </Button>
            </FormHeader>
          }
        ></Form>
      </Formik>
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
