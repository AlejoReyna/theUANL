import type { GradeChange } from '@/types/grades';

export async function notifyGradeChanges(changes: GradeChange[]): Promise<void> {
  await Promise.all(
    changes.map((change) =>
      chrome.notifications.create(`grade-${change.id}`, {
        type: 'basic',
        iconUrl: 'icons/icon-128.png',
        title: 'SIASE grade updated',
        message: `${change.subject}: ${change.previousScore ?? 'N/A'} → ${change.nextScore ?? change.nextStatus}`,
      }),
    ),
  );
}

export async function notifyStaleSnapshot(capturedAt: string): Promise<void> {
  const date = new Date(capturedAt).toLocaleDateString('es-MX');
  await chrome.notifications.create('siase-plus-stale-grades', {
    type: 'basic',
    iconUrl: 'icons/icon-128.png',
    title: 'SIASE Plus — calificaciones desactualizadas',
    message: `Última revisión: ${date}. Visita el portal para actualizar.`,
  });
}
