import { MediaKeyStatus } from './media-status.model';

export interface MediaItem {
  id: string;
  filename: string;
  size: number;
  width: number;
  height: number;
  status: MediaKeyStatus;
  tags: string[];
  createdAt: Date;
  previewUrl: string;
}
