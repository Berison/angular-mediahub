import { MediaSorting } from '../models/media-filters.model';
import { MediaItem } from '../models/media-item.model';
import { MediaFullStatuses } from '../models/media-status.model';

export const MEDIA_MOCK: MediaItem[] = [
  {
    id: 'media_001',
    filename: 'summer-campaign-banner.jpg',
    size: 2456789,
    width: 1920,
    height: 1080,
    status: 'approved',
    tags: ['marketing', 'summer', 'banner'],
    createdAt: new Date('2026-05-01'),
    previewUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200',
  },

  {
    id: 'media_002',
    filename: 'car-review-thumbnail.png',
    size: 1345678,
    width: 1280,
    height: 720,
    status: 'in_review',
    tags: ['cars', 'youtube', 'thumbnail'],
    createdAt: new Date('2026-05-03'),
    previewUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200',
  },

  {
    id: 'media_003',
    filename: 'nature-wallpaper.webp',
    size: 3567123,
    width: 2560,
    height: 1440,
    status: 'new',
    tags: ['nature', 'wallpaper'],
    createdAt: new Date('2026-05-06'),
    previewUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200',
  },
  {
    id: 'media_004',
    filename: 'summer-campaign-banner.jpg',
    size: 2456789,
    width: 1920,
    height: 1080,
    status: 'approved',
    tags: ['marketing', 'summer', 'banner'],
    createdAt: new Date('2026-02-01'),
    previewUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200',
  },

  {
    id: 'media_005',
    filename: 'car-review-thumbnail.png',
    size: 1345678,
    width: 1280,
    height: 720,
    status: 'in_review',
    tags: ['cars', 'youtube', 'thumbnail'],
    createdAt: new Date('2026-05-03'),
    previewUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200',
  },

  {
    id: 'media_006',
    filename: 'nature-wallpaper.webp',
    size: 3567123,
    width: 2560,
    height: 1440,
    status: 'new',
    tags: ['nature', 'wallpaper'],
    createdAt: new Date('2026-05-06'),
    previewUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200',
  },
  {
    id: 'media_007',
    filename: 'summer-campaign-banner.jpg',
    size: 2456789,
    width: 1920,
    height: 1080,
    status: 'approved',
    tags: ['marketing', 'summer', 'banner'],
    createdAt: new Date('2026-01-01'),
    previewUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200',
  },

  {
    id: 'media_008',
    filename: 'car-review-thumbnail.png',
    size: 1345678,
    width: 1280,
    height: 720,
    status: 'in_review',
    tags: ['cars', 'youtube', 'thumbnail'],
    createdAt: new Date('2026-05-03'),
    previewUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200',
  },

  {
    id: 'media_009',
    filename: 'nature-wallpaper.webp',
    size: 3567123,
    width: 2560,
    height: 1440,
    status: 'new',
    tags: ['nature', 'wallpaper'],
    createdAt: new Date('2026-05-06'),
    previewUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200',
  },
  {
    id: 'media_010',
    filename: 'nature-wallpaper.webp',
    size: 3567123,
    width: 2560,
    height: 1440,
    status: 'new',
    tags: ['nature', 'wallpaper'],
    createdAt: new Date('2026-05-06'),
    previewUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200',
  },
  {
    id: 'media_011',
    filename: 'summer-campaign-banner.jpg',
    size: 2456789,
    width: 1920,
    height: 1080,
    status: 'approved',
    tags: ['marketing', 'summer', 'banner'],
    createdAt: new Date('2026-05-01'),
    previewUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200',
  },

  {
    id: 'media_012',
    filename: 'car-review-thumbnail.png',
    size: 1345678,
    width: 1280,
    height: 720,
    status: 'in_review',
    tags: ['cars', 'youtube', 'thumbnail'],
    createdAt: new Date('2026-05-03'),
    previewUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200',
  },

  {
    id: 'media_013',
    filename: 'nature-wallpaper.webp',
    size: 3567123,
    width: 2560,
    height: 1440,
    status: 'new',
    tags: ['nature', 'wallpaper'],
    createdAt: new Date('2026-05-06'),
    previewUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200',
  },
];

export const MEDIA_SORT_ITEMS: MediaSorting[] = [
  {
    type: 'newest',
    query: 'newest',
  },
  {
    type: 'oldest',
    query: 'oldest',
  },
  {
    type: 'filename A-Z',
    query: 'a-z',
  },
  {
    type: 'filename Z-A',
    query: 'z-a',
  },
  {
    type: 'largest size',
    query: 'largest-size',
  },
];

export const MEDIA_STATUSES_ITEMS: MediaFullStatuses = {
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
