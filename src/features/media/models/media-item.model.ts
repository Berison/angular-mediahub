import { MediaStatus } from './media-status.model';

export interface MediaItem {
  id: string;
  filename: string;
  size: number;
  width: number;
  height: number;
  status: MediaStatus;
  tags: string[];
  createdAt: Date;
  previewUrl: string;
}
