import { computed, inject, Injectable, signal } from '@angular/core';
import { MediaApi } from '../api/media.api';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { MediaSorting, MediaSortingQuery } from '../models/media-filters.model';
import { MediaItem } from '../models/media-item.model';
import { MediaKeyStatus } from '../models/media-status.model';

@Injectable({
  providedIn: 'root',
})
export class MediaFacade {
  private readonly mediaApi = inject(MediaApi);

  private readonly mediaQuery = injectQuery(() => ({
    queryKey: ['media'],
    queryFn: () => this.mediaApi.getMediaList(),
  }));

  private readonly mediaFilterQuery = injectQuery(() => ({
    queryKey: ['mediaFilterItems'],
    queryFn: () => this.mediaApi.getMediaFilterList(),
  }));

  private readonly mediaStatusesQuery = injectQuery(() => ({
    queryKey: ['mediaStatuses'],
    queryFn: () => this.mediaApi.getMediaStatuses(),
  }));

  private readonly searchQueryState = signal('');
  private readonly sortingQueryState = signal<MediaSortingQuery>('newest');
  private readonly statusQueryState = signal<MediaKeyStatus | ''>('');

  readonly searchQuery = computed(() => this.searchQueryState());
  readonly sortingQuery = computed(() => this.sortingQueryState());
  readonly statusQuery = computed(() => this.statusQueryState());

  readonly mediaItems = computed(() => this.mediaQuery.data() ?? []);
  readonly mediaFilterItems = computed(() => this.mediaFilterQuery.data() ?? []);
  readonly mediaStatuses = computed(() => this.mediaStatusesQuery.data() ?? {});

  readonly totalMediaItemsCount = computed(() => this.mediaItems().length);

  readonly filteredMediaItems = computed(() => {
    const searchQuery = this.searchQuery();

    let sortedItemsByQuery: MediaItem[] = this.sortItemsByQuery(this.sortingQuery());

    if (this.statusQuery()) {
      sortedItemsByQuery = sortedItemsByQuery.filter((item) => item.status === this.statusQuery());
    }

    if (searchQuery) {
      sortedItemsByQuery = sortedItemsByQuery.filter((item) =>
        item.filename.toLowerCase().includes(searchQuery),
      );
    }

    return sortedItemsByQuery;
  });

  readonly filteredMediaItemsCount = computed(() => this.filteredMediaItems().length);

  readonly isMediaLoading = computed(() => this.mediaQuery.isLoading());
  readonly isMediaError = computed(() => this.mediaQuery.isError());
  readonly mediaError = computed(() => this.mediaQuery.error());

  private sortItemsByQuery(sortingBy: string) {
    let sortedItems: MediaItem[] = [],
      copyMediaItems = [...this.mediaItems()];

    switch (sortingBy) {
      case 'a-z':
        sortedItems = copyMediaItems.sort((a, b) => a.filename.localeCompare(b.filename));
        break;
      case 'z-a':
        sortedItems = copyMediaItems.sort((a, b) => {
          if (a.filename > b.filename) return -1;
          if (a.filename < b.filename) return 1;
          return 0;
        });
        break;
      case 'newest':
        sortedItems = copyMediaItems.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        break;
      case 'oldest':
        sortedItems = copyMediaItems.sort((a, b) => {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });
        break;
      case 'largest-size':
        sortedItems = copyMediaItems.sort((a, b) => b.size - a.size);
        break;
      default:
        sortedItems = copyMediaItems;
    }

    return sortedItems;
  }

  setSearchQuery(value: string): void {
    this.searchQueryState.set(value.trim().toLowerCase());
  }

  setSortingQuery(newState: MediaSortingQuery): void {
    this.sortingQueryState.set(newState);
  }

  setStatusQuery(newState: MediaKeyStatus | ''): void {
    this.statusQueryState.set(newState);
  }

  refetchMedia(): void {
    this.mediaQuery.refetch();
  }
}
