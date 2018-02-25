import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        'path': 'register',
        component: RegistrationComponent
      },
      {
        'path': 'login',
        component: LoginComponent
      },
      {
        'path': '',
        component: LoginComponent
      }
    ])
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
