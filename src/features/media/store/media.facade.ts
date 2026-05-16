import { computed, inject, Injectable, signal } from '@angular/core';
import { MediaApi } from '../api/media.api';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root',
})
export class MediaFacade {
  private readonly mediaApi = inject(MediaApi);

  private readonly mediaQuery = injectQuery(() => ({
    queryKey: ['media'],
    queryFn: () => this.mediaApi.getMediaList(),
  }));

  private readonly searchQueryState = signal('');

  readonly searchQuery = computed(() => this.searchQueryState());

  readonly mediaItems = computed(() => this.mediaQuery.data() ?? []);

  readonly filteredMediaItems = computed(() => {
    const searchQuery = this.searchQuery();

    if (!searchQuery) {
      return this.mediaItems();
    }

    return this.mediaItems().filter((item) => item.filename.toLowerCase().includes(searchQuery));
  });

  readonly isLoading = computed(() => this.mediaQuery.isLoading());
  readonly isError = computed(() => this.mediaQuery.isError());
  readonly error = computed(() => this.mediaQuery.error());

  setSearchQuery(value: string): void {
    this.searchQueryState.set(value.trim().toLowerCase());
  }

  refetchMedia(): void {
    this.mediaQuery.refetch();
  }
}
