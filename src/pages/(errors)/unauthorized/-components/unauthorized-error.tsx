"use client";

import { Link } from "@tanstack/react-router";

import { Button } from "@shared/ui/button";

export function UnauthorizedError() {
  return (
    <div className="mx-auto flex min-h-dvh flex-col items-center justify-center gap-8 p-8 md:gap-12 md:p-16">
      <img
        src="/assets/placeholder.svg"
        alt="placeholder image"
        className="aspect-video w-240 rounded-xl object-cover dark:brightness-[0.95] dark:invert"
      />
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold">401</h1>
        <h2 className="mb-3 text-2xl font-semibold">Unauthorized</h2>
        <p>You don't have permission to access this resource. Please sign in or contact your administrator.</p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button asChild className="cursor-pointer">
            <Link to="/dashboard">Go Back Home</Link>
          </Button>
          <Button variant="outline" className="flex cursor-pointer items-center gap-1">
            <Link to="/faqs">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
