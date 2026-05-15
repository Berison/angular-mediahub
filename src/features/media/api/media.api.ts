import { Injectable } from '@angular/core';
import { MEDIA_MOCK } from '../data/media.mock';
import { MediaItem } from '../models/media-item.model';

@Injectable({
  providedIn: 'root',
})
export class MediaApi {
  getMediaList(): Promise<MediaItem[]> {
    return Promise.resolve(MEDIA_MOCK);
  }
}
