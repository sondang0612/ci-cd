"use client";
import { useQuery } from "@apollo/client/react";
import { GET_COUNTRIES } from "../graphql/countries";
import { Country } from "../generated/graphql";

export default function Home() {
  const { data, loading, error } = useQuery<{ countries: Country[] }>(
    GET_COUNTRIES,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {data?.countries.map((c: Country) => (
        <li key={c.code}>
          {c.emoji} {c.name}
        </li>
      ))}
    </ul>
  );
}
