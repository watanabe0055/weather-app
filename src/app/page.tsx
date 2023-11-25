"use client";
import { useFetchApi } from "./hooks/featch";

export default function Home() {
  const { data, error, isLoading } = useFetchApi();
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data?.text}</div>;
}
