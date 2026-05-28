import { Component, input } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { MediaItem } from '../../models/media-item.model';
import { FileNamePipe } from '../../../../shared/pipes/fileName.pipe';
import { FileSizePipe } from '../../../../shared/pipes/fileSize.pipe';
import { MediaFullStatuses } from '../../models/media-status.model';

@Component({
  selector: 'md-media-detail',
  templateUrl: 'media-detail.component.html',
  imports: [FileNamePipe, TitleCasePipe, FileSizePipe, DatePipe],
})
export class MediaDetailComponent {
  readonly mediaItem = input.required<MediaItem>();
  readonly statuses = input.required<MediaFullStatuses>();
}
