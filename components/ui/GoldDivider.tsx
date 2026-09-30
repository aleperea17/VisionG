export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/80 to-gold-500" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-500/80 to-gold-500" />
    </div>
  );
}
