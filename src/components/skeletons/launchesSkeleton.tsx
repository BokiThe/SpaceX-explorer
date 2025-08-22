import React from "react";

const LaunchesSkeleton = () => (
  <div className="space-y-4">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="animate-pulse bg-gray-200 h-16 rounded" />
    ))}
  </div>
);

export default LaunchesSkeleton;
