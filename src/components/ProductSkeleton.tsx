import Skeleton from "./Skeleton";

export default function ProductSkeleton() {
  return (
    <div className="rounded-xl border p-4">
      {/* Image */}
      <Skeleton className="h-48 w-full" />

      {/* Title */}
      <Skeleton className="mt-4 h-5 w-3/4" />

      {/* Price */}
      <Skeleton className="mt-3 h-4 w-1/4" />
    </div>
  );
}
