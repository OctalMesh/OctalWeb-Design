import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@shared/ui/button";

export const Route = createFileRoute("/_base-layout/landing")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <div className="@container/main px-4 lg:px-6 space-y-6"></div>
      <div className="@container/main">
        <div className="flex min-h-svh p-6">
          <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
            <div>
              <h1 className="font-medium">Project ready!</h1>
              <p>You may now add components and start building.</p>
              <p>We&apos;ve already added the button component for you.</p>
              <Button className="mt-2">Button</Button>
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              (Press <kbd>d</kbd> to toggle dark mode)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
