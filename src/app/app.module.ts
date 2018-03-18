import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { CreateNoteComponent } from './create-note/create-note.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    NoteComponent,
    CreateNoteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
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
      },
      {
        'path': 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
