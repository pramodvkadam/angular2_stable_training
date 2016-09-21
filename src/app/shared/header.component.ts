import { Component, OnInit } from '@angular/core';
import {AcsiAuthService} from './';

@Component({
  selector: 'cgp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedInUser:string= "Pramod";

  constructor(private authService:AcsiAuthService) { 
        this.loggedInUser=this.authService.userName;
  }  

  ngOnInit() {
    this.loggedInUser=this.authService.userName;
  }
   
  routeIsLogin() {
      return this.authService.isLoggedIn();
  }

}
