import React from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { Song as TSong } from "../api/song/Song";

type Props = { id: string };

export const SongTitle = ({ id }: Props) => {
  const { data, isLoading, isError, error } = useQuery<
    TSong,
    AxiosError,
    [string, string]
  >(["get-/api/songs", id], async (key: string, id: string) => {
    const response = await api.get(`${"/api/songs"}/${id}`);
    return response.data;
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Link to={`${"/api/songs"}/${id}`} className="entity-id">
      {data?.id && data?.id.length ? data.id : data?.id}
    </Link>
  );
};
