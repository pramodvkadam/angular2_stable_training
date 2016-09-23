import {Component, OnInit} from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import {AcsiAuthService} from "../shared/acsi-auth.service";

@Component({
  selector: 'cgp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  user = {
    username: "",
    password: ""
  };
  active: boolean = false;

  constructor(public authService: AcsiAuthService, public router: Router) {

  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/search']);
    }
    this.active = true;
  }

  login() {
    // this.authService.login(this.user.username,this.user.password).subscribe(() => {
    //   if (this.authService.isLoggedIn()) {
    //     // Todo: capture where the user was going and nav there.
    //     // Meanwhile redirect the user to the crisis admin
    //     this.router.navigate(['/search']);
    //   }
    // });

    this.authService.login(this.user.username, this.user.password).subscribe((data) => {

      if (this.authService.setLogin(data)) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/search';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };
        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }

    });

  }

}
