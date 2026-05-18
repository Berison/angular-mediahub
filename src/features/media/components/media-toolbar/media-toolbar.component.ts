import { Component, input, output } from '@angular/core';
import { MediaSearchComponent } from './components/media-search/media-search.component';
import { MediaTotalCount } from './components/media-total-count/media-total-count.component';
import { MediaFilterComponent } from './components/media-filters/media-filters.component';
import { MediaSorting, MediaSortingQuery } from '../../models/media-filters.model';

@Component({
  selector: 'md-media-toolbar',
  templateUrl: 'media-toolbar.component.html',
  imports: [MediaSearchComponent, MediaTotalCount, MediaFilterComponent],
})
export class MediaToolbarComponent {
  readonly searchChanged = output<string>();
  readonly filterChanged = output<MediaSortingQuery>();
  readonly filterValue = input<MediaSortingQuery>();
  readonly filterItems = input<MediaSorting[]>([]);
  readonly searchValue = input<string>('');
  readonly totalCount = input<number>(0);
  readonly filteredCount = input<number>(0);

  changedSearchValue(value: string) {
    this.searchChanged.emit(value);
  }

  changedFilterValue(value: MediaSortingQuery) {
    this.filterChanged.emit(value);
  }
}
