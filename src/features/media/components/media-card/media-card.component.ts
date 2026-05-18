import { Component, input } from '@angular/core';
import { MediaItem } from '../../models/media-item.model';
import { FileNamePipe } from '../../../../shared/pipes/fileName.pipe';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { FileSizePipe } from '../../../../shared/pipes/fileSize.pipe';
import { MEDIA_STATUS_STYLES } from '../../media.config';

@Component({
  selector: 'md-media-card',
  templateUrl: 'media-card.component.html',
  imports: [FileNamePipe, TitleCasePipe, FileSizePipe, DatePipe],
})
export class MediaCardComponent {
  readonly item = input.required<MediaItem>();
  protected readonly statusStyles = MEDIA_STATUS_STYLES;
}
