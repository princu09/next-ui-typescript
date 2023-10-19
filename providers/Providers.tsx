// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import RouteHandler from "./RouteHandler";
import { StoreProvider } from "./StoreProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <StoreProvider>
        <RouteHandler>{children}</RouteHandler>
      </StoreProvider>
    </NextUIProvider>
  );
}
