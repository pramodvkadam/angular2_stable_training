import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer.component';
import { HeaderComponent } from './shared/header.component';
import {AcsiAuthService} from './shared';
import {AcsiCommonService} from './shared';
import {AcsiGuardService} from './shared';

const routes: Routes = [

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule ,
    RouterModule.forRoot(routes) 
  ],
  providers: [AcsiAuthService,
  AcsiCommonService,
  AcsiGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
