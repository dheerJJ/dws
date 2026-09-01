import { Skeleton, SkeletonText } from "./Skeleton";

/**
 * Full-page shimmering skeleton shown while a route (and its data) loads.
 */
export function PageSkeleton() {
  return (
    <div role="status" aria-live="polite" aria-label="Loading page" className="dws-page-skeleton">
      <div className="container dws-section">
        <Skeleton width={120} height={12} radius={999} className="mb-4" />
        <Skeleton width="min(680px, 100%)" height={44} radius={12} className="mb-3" />
        <Skeleton width="min(420px, 80%)" height={44} radius={12} className="mb-4" />
        <div style={{ maxWidth: 560 }}>
          <SkeletonText lines={3} />
        </div>

        <div className="row g-4 mt-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="col-12 col-md-4" key={i}>
              <div className="dws-page-skeleton-card">
                <Skeleton height={150} radius={14} className="mb-3" />
                <Skeleton width="60%" height={16} className="mb-3" />
                <SkeletonText lines={2} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
