import { createFileRoute } from "@tanstack/react-router";

import { ForbiddenError } from "@pages/(errors)/forbidden/-components/forbidden-error";

export const Route = createFileRoute("/(errors)/forbidden/")({
  component: ForbiddenError,
});
