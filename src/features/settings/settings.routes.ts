import { Routes } from '@angular/router';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/settings-page/settings-page.component').then((m) => m.SettingsPage),
    data: {
      title: 'Settings',
      description: 'Manage application preferences',
    },
  },
];
