import { Component, input } from '@angular/core';
import { MediaItem } from '../../models/media-item.model';
import { FileNamePipe } from '../../../../shared/pipes/fileName.pipe';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { FileSizePipe } from '../../../../shared/pipes/fileSize.pipe';
import { MediaFullStatuses } from '../../models/media-status.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'md-media-card',
  templateUrl: 'media-card.component.html',
  imports: [FileNamePipe, TitleCasePipe, FileSizePipe, DatePipe, RouterLink],
})
export class MediaCardComponent {
  readonly item = input.required<MediaItem>();
  readonly statusItems = input.required<MediaFullStatuses>();
}
