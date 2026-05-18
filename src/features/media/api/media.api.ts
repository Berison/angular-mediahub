import { Injectable } from '@angular/core';
import { MEDIA_MOCK, MEDIA_SORT_ITEMS } from '../data/media.mock';
import { MediaItem } from '../models/media-item.model';
import { MediaSorting } from '../models/media-filters.model';

@Injectable({
  providedIn: 'root',
})
export class MediaApi {
  getMediaList(): Promise<MediaItem[]> {
    return Promise.resolve(MEDIA_MOCK);
  }

  getMediaFilterList(): Promise<MediaSorting[]> {
    return Promise.resolve(MEDIA_SORT_ITEMS);
  }
}
