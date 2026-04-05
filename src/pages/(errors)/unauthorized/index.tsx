import { createFileRoute } from "@tanstack/react-router";

import { UnauthorizedError } from "@pages/(errors)/unauthorized/-components/unauthorized-error";

export const Route = createFileRoute("/(errors)/unauthorized/")({
  component: UnauthorizedError,
});
