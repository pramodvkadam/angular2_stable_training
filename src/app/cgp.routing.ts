/**
 * Created by pramodk on 9/23/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loginRoutes,
  authProviders }      from './login/login.routing';

import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { AcsiGuardService }          from './shared/acsi-guard.service';


const searchRoutes: Routes = [
  {
    path: 'search',
    loadChildren: 'app/admin/search.module#SearchModule',
    canLoad: [AcsiGuardService]
  }
];

const appRoutes: Routes = [
  ...loginRoutes,
  ...searchRoutes
];

export const appRoutingProviders: any[] = [
  authProviders,
  CanDeactivateGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
