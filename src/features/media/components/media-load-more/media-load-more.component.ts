import { Component, output } from '@angular/core';

@Component({
  selector: 'md-media-load-more',
  template: `<button
    type="button"
    class="
    mt-4 mx-auto flex items-center justify-center
    rounded-xl border border-zinc-700
    bg-zinc-900 px-6 py-3
    text-sm font-medium text-zinc-100
    transition-all duration-200
    hover:border-zinc-500
    hover:bg-zinc-800
    active:scale-[0.98]
  "
    (click)="onButtonClick()"
  >
    Load more
  </button>`,
})
export class MediaLoadMoreComponent {
  readonly loadMoreClick = output();

  onButtonClick() {
    this.loadMoreClick.emit();
  }
}
