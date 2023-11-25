"use client";
import GrassContainer from "./components/GrassContainer";
import { useFetchApi } from "./hooks/featch";

export default function Home() {
  const { data, error, isLoading } = useFetchApi();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <GrassContainer data={data} />;
}
