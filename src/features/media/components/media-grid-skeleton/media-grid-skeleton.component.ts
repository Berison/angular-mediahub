import { Component } from '@angular/core';

@Component({
  selector: 'md-media-grid-skeleton',
  templateUrl: 'media-grid-skeleton.component.html',
})
export class MediaGridSkeletonComponent {
  readonly skeletonItems = Array.from({ length: 8 });
}
