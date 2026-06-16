"use client";

import { client } from "@/src/lib/apolloClient";
import { ApolloProvider } from "@apollo/client/react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
