"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// The static 404.html is shared by every missing URL, so the path is read on the client.
export function MissingPath() {
  const path = useSyncExternalStore(subscribe, () => window.location.pathname, () => "");
  return <>{path || "that"}</>;
}
