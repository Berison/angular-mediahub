import { MediaItem } from '../models/media-item.model';

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
];
