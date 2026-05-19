import { Injectable } from '@angular/core';
import { MEDIA_MOCK, MEDIA_SORT_ITEMS, MEDIA_STATUSES_ITEMS } from '../data/media.mock';
import { MediaItem } from '../models/media-item.model';
import { MediaSorting } from '../models/media-filters.model';
import { MediaFullStatuses } from '../models/media-status.model';

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

  getMediaStatuses(): Promise<MediaFullStatuses> {
    return Promise.resolve(MEDIA_STATUSES_ITEMS);
  }
}
