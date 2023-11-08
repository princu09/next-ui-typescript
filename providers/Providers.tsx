"use client";
import RouteHandler from "./RouteHandler";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <RouteHandler>{children}</RouteHandler>
    </SessionProvider>
  );
}
