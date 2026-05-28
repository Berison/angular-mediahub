import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

import { toSignal } from '@angular/core/rxjs-interop';

type RouterData = { title: string; description: string };

@Component({
  selector: 'md-topbar',
  templateUrl: 'topbar.component.html',
  styleUrl: 'topbar.component.css',
})
export class TopbarComponent {
  private readonly router = inject(Router);

  private readonly routerData = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => this.getCurrentRouteData()),
    ),
    {
      initialValue: this.getCurrentRouteData() as RouterData,
    },
  );

  readonly title = computed(() => {
    return this.routerData()['title'] ?? 'Media Library';
  });

  readonly description = computed(() => {
    return this.routerData()['description'] ?? 'Manage your local media assets';
  });

  private getCurrentRouteData() {
    let route = this.router.routerState.snapshot.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    return route.data;
  }
}
