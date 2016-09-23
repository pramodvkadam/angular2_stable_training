import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams, Headers} from '@angular/http';
import {AcsiConfig} from './acsi-config.const';

import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AcsiAuthService {

  private authUrl: string;
  public loggedIn: boolean;
  public userName: string = "";
  public redirectUrl: string;

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
      .post(this.authUrl, body.toString(), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};

  }

  public setLogin(data){
    if (data) {
      localStorage.setItem('acsi_b2b_user', JSON.stringify(data));
      this.userName = data.userName;
     return this.loggedIn = true;
    }
  }



  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

  logout() {
    localStorage.removeItem('acsi_b2b_user');
    this.userName = "";
     this.loggedIn = false;
  }

  public getCurrentUser = function(){
    return this.userName;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}
