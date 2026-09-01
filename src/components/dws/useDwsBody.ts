import { useEffect } from "react";

export function useDwsBody() {
  useEffect(() => {
    document.body.classList.add("dws-body");
    return () => document.body.classList.remove("dws-body");
  }, []);
}
