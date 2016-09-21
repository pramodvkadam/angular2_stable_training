import { Injectable }          from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AcsiAuthService }         from './acsi-auth.service';

@Injectable()
export class AcsiGuardService {

  constructor(private authService: AcsiAuthService, private router: Router) {}

  canActivate() {
    if (this.authService.isLoggedIn()) { return true; }
    this.router.navigate(['/login']);
    return false;
  }

}
