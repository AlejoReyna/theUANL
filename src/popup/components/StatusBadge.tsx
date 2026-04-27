import type { FC } from 'react';

export type StatusBadgeVariant = 'live' | 'stale' | 'offline';

interface StatusBadgeProps {
  variant: StatusBadgeVariant;
  label?: string;
}

const VARIANT_CLASSES: Record<StatusBadgeVariant, string> = {
  live: 'bg-green-100 text-green-800',
  stale: 'bg-yellow-100 text-yellow-800',
  offline: 'bg-gray-100 text-gray-500',
};

const DEFAULT_LABELS: Record<StatusBadgeVariant, string> = {
  live: 'Actualizado',
  stale: 'Desactualizado',
  offline: 'Sin conexión',
};

export const StatusBadge: FC<StatusBadgeProps> = ({ variant, label }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${VARIANT_CLASSES[variant]}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
    {label ?? DEFAULT_LABELS[variant]}
  </span>
);
