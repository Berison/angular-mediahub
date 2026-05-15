import { MediaStatus } from './models/media-status.model';

export const MEDIA_STATUS_STYLES: Record<
  MediaStatus,
  {
    label: string;
    classes: string;
  }
> = {
  new: {
    label: 'New',
    classes: 'bg-blue-100 text-blue-700',
  },

  in_review: {
    label: 'In Review',
    classes: 'bg-yellow-100 text-yellow-700',
  },

  approved: {
    label: 'Approved',
    classes: 'bg-green-100 text-green-700',
  },

  rejected: {
    label: 'Rejected',
    classes: 'bg-red-100 text-red-700',
  },

  archived: {
    label: 'Archived',
    classes: 'bg-zinc-200 text-zinc-700',
  },
};
