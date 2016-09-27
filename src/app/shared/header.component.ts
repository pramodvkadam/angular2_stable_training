import {Component, OnInit, OnChanges} from '@angular/core';
import {Router} from "@angular/router";
import {AcsiAuthService} from './';

import { SearchInputComponent } from '../search/search-input.component';


@Component({
  selector: 'cgp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnChanges{

  public loggedInUser: string = "";

  constructor(private authService: AcsiAuthService, public router: Router) {
    this.loggedInUser = this.authService.getCurrentUser();
  }

  ngOnChanges() {
    this.loggedInUser = this.authService.getCurrentUser();
  }

  ngOnInit() {
    this.loggedInUser = this.authService.getCurrentUser();
  }

  routeIsLogin() {
    return this.authService.isLoggedIn();
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
  }

}
