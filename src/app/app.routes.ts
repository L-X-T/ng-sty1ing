import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';

import flights from './flights/flights.routes';

import { Lab02FoundationsComponent } from './lab-02-foundations/lab-02-foundations.component';
import { Lab03EssentialsComponent } from './lab-03-essentials/lab-03-essentials.component';
import { Lab04AdvancedComponent } from './lab-04-advanced/lab-04-advanced.component';
import { Lab05ResponsiveComponent } from './lab-05-responsive/lab-05-responsive.component';
import { Lab06ModernComponent } from './lab-06-modern/lab-06-modern.component';
import { Lab08TailwindComponent } from './lab-08-tailwind/lab-08-tailwind.component';
import { Lab09AngularComponent } from './lab-09-angular/lab-09-angular.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'flights',
    children: flights,
    // loadChildren: () => import('./flights/flights.routes').then((f) => f.flightBookingRoutes),
  },

  {
    path: 'lab-02-foundations',
    component: Lab02FoundationsComponent,
  },

  {
    path: 'lab-03-essentials',
    component: Lab03EssentialsComponent,
  },

  {
    path: 'lab-04-advanced',
    component: Lab04AdvancedComponent,
  },

  {
    path: 'lab-05-responsive',
    component: Lab05ResponsiveComponent,
  },

  {
    path: 'lab-06-modern',
    component: Lab06ModernComponent,
  },

  {
    path: 'lab-08-tailwind',
    component: Lab08TailwindComponent,
  },

  {
    path: 'lab-09-angular',
    component: Lab09AngularComponent,
  },

  /*{
    path: '**',
    redirectTo: '',
  },*/
];
