import { Component, output } from '@angular/core';

@Component({
  selector: 'md-media-error-state',
  templateUrl: 'media-error-state.component.html',
})
export class MediaErrorStateComponent {
  readonly retryClicked = output<void>();
}
