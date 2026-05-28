import { Component, computed, inject, signal } from '@angular/core';
import { MediaFacade } from '../../store/media.facade';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MediaItem } from '../../models/media-item.model';
import { MediaDetailComponent } from '../../components/media-detail/media-detail.component';
import { LucideAngularModule, StepBack } from 'lucide-angular';

@Component({
  selector: 'md-media-detail-page',
  templateUrl: 'media-detail-page.component.html',
  imports: [MediaDetailComponent, RouterLink, LucideAngularModule],
})
export class MediaDetailPage {
  readonly mediaFacade = inject(MediaFacade);

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly routeParams = toSignal(this.activatedRoute.params);

  readonly statuses = computed(() => this.mediaFacade.mediaStatuses());

  readonly icons = {
    stepBack: StepBack,
  };

  readonly isMediaError = signal<string>('');
  readonly notFound = computed(() => {
    return (
      !this.mediaFacade.isMediaLoading() &&
      !this.mediaFacade.isMediaError() &&
      !!this.routeParams()?.['id'] &&
      !this.mediaItem()
    );
  });
  readonly isMediaLoading = signal<boolean>(true);

  readonly mediaItem = computed<MediaItem | undefined>(() => {
    const params = this.routeParams();
    if (params) {
      try {
        const params = this.routeParams();

        if (!params?.['id']) {
          return undefined;
        }

        return this.mediaFacade.getMediaItemById(params['id']);
      } catch {
        this.isMediaError.set('Somethings was wrong, try later');
        return undefined;
      }
    } else {
      this.isMediaError.set('Somethings was wrong, try later');
      return undefined;
    }
  });
}
