import { Component, computed, input, output } from '@angular/core';
import { MediaSearchComponent } from './components/media-search/media-search.component';
import { MediaTotalCount } from './components/media-total-count/media-total-count.component';
import { MediaSorting, MediaSortingQuery } from '../../models/media-filters.model';
import { MediaSelectComponent } from '../../../../shared/components/media-select/media-select.component';
import { MediaFullStatuses, MediaKeyStatus } from '../../models/media-status.model';

@Component({
  selector: 'md-media-toolbar',
  templateUrl: 'media-toolbar.component.html',
  imports: [MediaSearchComponent, MediaTotalCount, MediaSelectComponent],
})
export class MediaToolbarComponent {
  readonly searchChanged = output<string>();
  readonly searchValue = input<string>('');

  readonly filterChanged = output<MediaSortingQuery>();
  readonly filterValue = input<MediaSortingQuery>();
  readonly filterItems = input<MediaSorting[]>([]);

  readonly statusChanged = output<MediaKeyStatus>();
  readonly statusValue = input<MediaKeyStatus | ''>();
  readonly statusItems = input<MediaFullStatuses>({});

  readonly statusItemsForSelect = computed(() =>
    Object.entries(this.statusItems()).map(([key, value]) => ({
      type: value.label,
      query: key,
      classes: value.classes,
    })),
  );

  readonly totalCount = input<number>(0);
  readonly filteredCount = input<number>(0);

  changedSearchValue(value: string) {
    this.searchChanged.emit(value);
  }

  changedFilterValue(value: string) {
    this.filterChanged.emit(value as MediaSortingQuery);
  }

  changedStatusValue(value: string) {
    this.statusChanged.emit(value as MediaKeyStatus);
  }
}
