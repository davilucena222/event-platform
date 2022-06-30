import { CircleNotch } from "phosphor-react";

export function Loading() {
  return(
    <div className="w-auto h-auto flex items-center justify-center mt-64 overflow-hidden">
      <CircleNotch weight="bold" className="w-14 h-14 animate-spin" />
    </div>
  );
}