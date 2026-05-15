import { Component, inject, input } from '@angular/core';
import { MediaCardComponent } from '../media-card/media-card.component';
import { MediaItem } from '../../models/media-item.model';

@Component({
  selector: 'md-media-grid',
  templateUrl: 'media-grid.component.html',
  imports: [MediaCardComponent],
})
export class MediaGridComponent {
  readonly items = input.required<MediaItem[]>();
}
