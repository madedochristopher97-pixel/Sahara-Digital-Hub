import React from "react";
import { KineticTextLoader } from "@/components/ui/KineticTextLoader";

export default function Loading() {
  return (
    <div 
      className="min-h-[70vh] w-full flex items-center justify-center bg-[#FFFDF6] dark:bg-[#0A0A0A] px-4"
      role="status"
      aria-label="Loading page"
    >
      <KineticTextLoader text="Loading" />
    </div>
  );
}
