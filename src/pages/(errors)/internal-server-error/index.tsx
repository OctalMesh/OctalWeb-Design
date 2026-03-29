import { createFileRoute } from "@tanstack/react-router";

import { InternalServerError } from "@pages/(errors)/internal-server-error/-components/internal-server-error";

export const Route = createFileRoute("/(errors)/internal-server-error/")({
  component: InternalServerError,
});
