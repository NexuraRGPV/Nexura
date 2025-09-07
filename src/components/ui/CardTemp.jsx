import React from "react";

export function Card({ children, className }) {
  return (
    <div
      className={`rounded-2xl shadow-lg bg-gradient-to-b from-purple-900/40 to-purple-700/20 
                  backdrop-blur-lg border border-purple-500/20 text-white p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}
