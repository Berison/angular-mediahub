import { Component, input, output } from '@angular/core';
import { MediaSorting, MediaSortingQuery } from '../../../../models/media-filters.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'md-media-filter',
  template: `<div class="relative">
    <select
      name="filter-by"
      class="min-w-48 appearance-none rounded-xl border border-zinc-200 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-zinc-700 shadow-sm outline-none transition hover:border-zinc-300 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
      (change)="changeFilter($event)"
    >
      @for (item of filterItems(); track item.query) {
        <option [value]="item.query" [selected]="item.query === filterValue()">
          {{ item.type | titlecase }}
        </option>
      }
    </select>

    <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-zinc-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>`,
  imports: [TitleCasePipe],
})
export class MediaFilterComponent {
  readonly filterItems = input<MediaSorting[]>([]);
  readonly filterValue = input<MediaSortingQuery>();
  readonly filterChanged = output<MediaSortingQuery>();

  changeFilter(event: Event) {
    const select = event.target as HTMLSelectElement;

    this.filterChanged.emit(select.value as MediaSortingQuery);
  }
}
