"use client";

import { PropagateLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex flex-1 items-center justify-center bg-slate-950/90">
      <PropagateLoader color="#22d3ee" />
    </div>
  );
}