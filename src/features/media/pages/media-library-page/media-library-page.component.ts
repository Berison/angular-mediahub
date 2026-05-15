import { Component, inject, signal } from '@angular/core';
import { MediaGridComponent } from '../../components/media-grid/media-grid.component';
import { MediaFacade } from '../../store/media.facade';
import { MediaToolbarComponent } from '../../components/media-toolbar/media-toolbar.component';

@Component({
  selector: 'md-media-library-page',
  templateUrl: 'media-library-page.component.html',
  imports: [MediaGridComponent, MediaToolbarComponent],
})
export class MediaLibraryPage {
  readonly mediaFacade = inject(MediaFacade);

  onSearchChanged(newValue: string) {
    this.mediaFacade.setSearchQuery(newValue);
  }
}
