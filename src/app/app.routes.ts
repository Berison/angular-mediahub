import { Routes } from '@angular/router';
import { ShellComponent } from '../layout/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'media',
      },
      {
        path: 'media',
        loadChildren: () => import('./../features/media/media.routes').then((m) => m.MEDIA_ROUTES),
      },

      {
        path: 'dashboard',
        loadChildren: () =>
          import('./../features/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./../features/settings/settings.routes').then((m) => m.SETTINGS_ROUTES),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'media',
  },
];
