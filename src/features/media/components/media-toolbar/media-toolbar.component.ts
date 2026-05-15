import { Component, input, output } from '@angular/core';

@Component({
  selector: 'md-media-toolbar',
  templateUrl: 'media-toolbar.component.html',
})
export class MediaToolbarComponent {
  readonly searchChanged = output<string>();
  readonly searchValue = input<string>('');

  changedSearchValue(event: Event) {
    const input = event.target as HTMLInputElement;

    this.searchChanged.emit(input.value);
  }
}
