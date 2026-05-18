import { Component, inject, signal } from '@angular/core';
import { MediaGridComponent } from '../../components/media-grid/media-grid.component';
import { MediaFacade } from '../../store/media.facade';
import { MediaToolbarComponent } from '../../components/media-toolbar/media-toolbar.component';
import { MediaGridSkeletonComponent } from '../../components/media-grid-skeleton/media-grid-skeleton.component';
import { MediaErrorStateComponent } from '../../components/media-error-state/media-error-state.component';
import { MediaSortingQuery } from '../../models/media-filters.model';

@Component({
  selector: 'md-media-library-page',
  templateUrl: 'media-library-page.component.html',
  imports: [
    MediaGridComponent,
    MediaToolbarComponent,
    MediaGridSkeletonComponent,
    MediaErrorStateComponent,
  ],
})
export class MediaLibraryPage {
  readonly mediaFacade = inject(MediaFacade);

  onSearchChanged(newValue: string) {
    this.mediaFacade.setSearchQuery(newValue);
  }

  onFilterChanged(newValue: MediaSortingQuery) {
    this.mediaFacade.setSortingQuery(newValue);
  }

  onRetryClicked() {
    this.mediaFacade.refetchMedia();
  }
}
