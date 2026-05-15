import { Routes } from '@angular/router';

export const MEDIA_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/media-library-page/media-library-page.component').then(
        (m) => m.MediaLibraryPage,
      ),
    data: {
      title: 'Media Library',
      description: 'Manage your local media assets',
    },
  },
];
