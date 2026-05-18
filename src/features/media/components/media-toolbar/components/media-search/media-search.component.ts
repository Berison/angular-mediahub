import { Component, input, output } from '@angular/core';

@Component({
  selector: 'md-media-search',
  template: `<div class="search mb-3">
    <input
      name="search"
      type="search"
      placeholder="Search..."
      class="w-full max-w-sm rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
      (input)="changedSearchValue($event)"
      [value]="searchValue()"
    />
  </div>`,
})
export class MediaSearchComponent {
  readonly searchChanged = output<string>();
  readonly searchValue = input<string>('');

  changedSearchValue(event: Event) {
    const input = event.target as HTMLInputElement;

    this.searchChanged.emit(input.value);
  }
}
