import { createFileRoute } from "@tanstack/react-router";

import { NotFoundError } from "@pages/(errors)/not-found/-components/not-found-error";

export const Route = createFileRoute("/(errors)/not-found/")({
  component: NotFoundError,
});
