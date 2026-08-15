import React from "react";
import { LoaderCircle } from "lucide-react";

const Loding = () => {
  return (
    <div
      className="flex min-h-dvh items-center justify-center"
      style={{
        backgroundColor: "var(--bg-main)",
      }}
    >
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              backgroundColor: "var(--primary)",
              opacity: 0.15,
            }}
          />

          <LoaderCircle
            className="relative h-10 w-10 animate-spin"
            style={{
              color: "var(--primary)",
            }}
            strokeWidth={1.5}
          />
        </div>

        {/* Text */}
        <h2
          className="mt-5 text-sm font-semibold tracking-wide"
          style={{
            color: "var(--text-primary)",
          }}
        >
          Loading
        </h2>

        <p
          className="mt-1 text-xs font-medium"
          style={{
            color: "var(--text-muted)",
          }}
        >
          Preparing your workspace...
        </p>

        {/* Loading bar */}
        <div
          className="mt-5 h-1 w-24 overflow-hidden rounded-full"
          style={{
            backgroundColor: "var(--bg-card)",
          }}
        >
          <div
            className="h-full w-1/2 animate-pulse rounded-full"
            style={{
              backgroundColor: "var(--primary)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loding;
