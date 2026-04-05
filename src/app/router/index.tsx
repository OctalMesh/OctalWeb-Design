import { RouterProvider, createRouter } from "@tanstack/react-router";

import { NotFoundError } from "@pages/(errors)/not-found/-components/not-found-error";

import { routeTree } from "@/routeTree.gen";

const router = createRouter({
  routeTree,
  scrollRestoration: true,
  defaultPreload: "intent",
  defaultNotFoundComponent: NotFoundError,
  defaultViewTransition: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
