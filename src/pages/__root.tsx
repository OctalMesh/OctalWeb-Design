import { Suspense } from "react";

import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { LoadingSpinner } from "@shared/ui/loading-spinner";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </>
  );
}
