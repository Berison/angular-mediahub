import { computed, inject, Injectable } from '@angular/core';
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

  readonly mediaItems = computed(() => this.mediaQuery.data() ?? []);
  readonly isLoading = computed(() => this.mediaQuery.isLoading());
  readonly isError = computed(() => this.mediaQuery.isError());
  readonly error = computed(() => this.mediaQuery.error());
}
