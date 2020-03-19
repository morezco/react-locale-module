import { useState, useCallback } from "react";

export function useRerender() {
  const [, setForceRender] = useState(Math.random());
  const refresh = useCallback(() => setForceRender(Math.random()), []);
  return refresh;
}
