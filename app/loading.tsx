import ProductSkeleton from "@/src/components/ProductSkeleton";

export default function Loading() {
  return (
    <main className="p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </main>
  );
}
