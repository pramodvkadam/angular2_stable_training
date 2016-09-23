/**
 * Created by pramodk on 9/23/2016.
 */
import { Routes }         from '@angular/router';
import { AcsiGuardService }      from '../shared/acsi-guard.service';
import { AcsiAuthService }    from '../shared/acsi-auth.service';
import { LoginComponent } from './login.component';

export const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

export const authProviders = [
  AcsiGuardService,
  AcsiAuthService
];
