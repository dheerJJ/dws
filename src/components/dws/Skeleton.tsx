type SkeletonProps = {
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  className?: string;
};

export function Skeleton({ width = "100%", height = 14, radius = 6, className }: SkeletonProps) {
  return (
    <span
      className={`dws-skeleton${className ? ` ${className}` : ""}`}
      style={{ width, height, borderRadius: radius }}
      aria-hidden="true"
    />
  );
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <span className={`dws-skeleton-stack${className ? ` ${className}` : ""}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} width={i === lines - 1 ? "60%" : "100%"} height={12} />
      ))}
    </span>
  );
}

export function CommentSkeleton() {
  return (
    <div className="dws-comment" aria-hidden="true">
      <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
        <Skeleton width={120} height={13} />
        <Skeleton width={70} height={11} />
      </div>
      <SkeletonText lines={2} />
    </div>
  );
}

export function EnquirySkeleton() {
  return (
    <div className="dws-enquiry-skeleton" aria-hidden="true">
      <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
        <Skeleton width="35%" height={16} />
        <Skeleton width={90} height={22} radius={999} />
      </div>
      <SkeletonText lines={2} />
    </div>
  );
}

export function SkeletonScreen({
  label = "Loading",
  rows = 3,
  children,
}: {
  label?: string;
  rows?: number;
  children?: React.ReactNode;
}) {
  return (
    <div role="status" aria-live="polite" aria-label={label} className="dws-skeleton-screen">
      {children ?? Array.from({ length: rows }).map((_, i) => <EnquirySkeleton key={i} />)}
    </div>
  );
}
