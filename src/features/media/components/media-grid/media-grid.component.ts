import { Component, inject, input } from '@angular/core';
import { MediaCardComponent } from '../media-card/media-card.component';
import { MediaItem } from '../../models/media-item.model';
import { MediaEmptyStateComponent } from '../media-empty-state/media-empty-state.component';

@Component({
  selector: 'md-media-grid',
  templateUrl: 'media-grid.component.html',
  imports: [MediaCardComponent, MediaEmptyStateComponent],
})
export class MediaGridComponent {
  readonly items = input.required<MediaItem[]>();
}
