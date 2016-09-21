import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import {AcsiConfig} from './acsi-config.const';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AcsiAuthService {

  private authUrl: string;
  private loggedIn: boolean;
  public userName: string = "";

  constructor(private http: Http) {

    this.loggedIn = !!localStorage.getItem('acsi_b2b_user');

    let loginUser = JSON.parse(localStorage.getItem("acsi_b2b_user"));

    if (loginUser) {
      this.userName = loginUser.userName;
    }

    this.authUrl = AcsiConfig.authUrl;
  }

  login(username: string, password: string) {
    const body = new URLSearchParams();
    body.append("grant_type", "password");
    body.append("password", password);
    body.append("username", username);
    let headers = new Headers({
      'Content-Type': "application/x-www-form-urlencoded"
    });

    return this.http
      .post(this.authUrl, body.toString(), { headers: headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    if (body) {
      localStorage.setItem('acsi_b2b_user', JSON.stringify(body));
      this.loggedIn = true;
      this.userName = body.data.userName;
    }
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  logout() {
    localStorage.removeItem('acsi_b2b_user');
      this.userName = "Pramod";
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}
