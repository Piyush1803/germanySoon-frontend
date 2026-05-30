import { Skeleton } from "@/components/ui/skeleton";

export function SectionSkeleton() {
  return (
    <div className="section-padding section-container" aria-busy="true" aria-label="Loading section">
      <Skeleton className="mx-auto mb-6 h-8 w-48 rounded-full" />
      <Skeleton className="mx-auto mb-4 h-12 w-full max-w-xl" />
      <Skeleton className="mx-auto mb-12 h-6 w-full max-w-2xl" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-64 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
