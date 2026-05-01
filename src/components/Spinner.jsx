"use client";

import { PropagateLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="bg-slate-950/90">
      <div className="flex items-center justify-center h-screen">
        <PropagateLoader color="#22d3ee" />
      </div>
    </div>
  );
}