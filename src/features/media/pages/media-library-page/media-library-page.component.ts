import { Component, inject } from '@angular/core';
import { MediaGridComponent } from '../../components/media-grid/media-grid.component';
import { MediaFacade } from '../../store/media.facade';

@Component({
  selector: 'md-media-library-page',
  templateUrl: 'media-library-page.component.html',
  imports: [MediaGridComponent],
})
export class MediaLibraryPage {
  readonly mediaFacade = inject(MediaFacade);
}
