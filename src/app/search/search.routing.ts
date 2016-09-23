/**
 * Created by pramodk on 9/23/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcsiGuardService} from "../shared/acsi-guard.service";
import {SearchComponent} from "./search.component";

const searchRoutes: Routes = [{
  path: '',
  redirectTo: '/search',
  pathMatch: 'full',
  canActivate: [AcsiGuardService]
},
  {
    path: 'search',
    children: [
      {
        path: ':searchFor/:searchBy',
        component: SearchComponent
      },
      {
        path: '',
        component: SearchComponent
      }
    ],
    canActivateChild: [AcsiGuardService]
  }
];

export const searchRouting: ModuleWithProviders = RouterModule.forChild(searchRoutes);
