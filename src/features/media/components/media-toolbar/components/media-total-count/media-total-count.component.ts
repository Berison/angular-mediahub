import { Component, input } from '@angular/core';

@Component({
  selector: 'md-media-total-count',
  template: `<div class="show-count">
    <p class="text-sm text-zinc-500">
      Showing
      <span class="font-medium text-zinc-900">{{ filteredCount() }}</span>
      of
      <span class="font-medium text-zinc-900">{{ totalCount() }}</span>
      media items
    </p>
  </div>`,
})
export class MediaTotalCount {
  readonly totalCount = input<number>(0);
  readonly filteredCount = input<number>(0);
}
