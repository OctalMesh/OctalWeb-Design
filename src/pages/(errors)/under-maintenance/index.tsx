import { createFileRoute } from "@tanstack/react-router";

import { UnderMaintenanceError } from "@pages/(errors)/under-maintenance/-components/under-maintenance-error";

export const Route = createFileRoute("/(errors)/under-maintenance/")({
  component: UnderMaintenanceError,
});
