"use client";
import { NextUIProvider } from "@nextui-org/react";
import RouteHandler from "./RouteHandler";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <SessionProvider>
        <RouteHandler>{children}</RouteHandler>
      </SessionProvider>
    </NextUIProvider>
  );
}
