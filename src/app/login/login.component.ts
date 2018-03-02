import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService, private _router: Router) { }

  form;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.compose([Validators.required, Validators.minLength(8)]))
    });
  }

  login(user){
    this._loginService.login(user)
      .subscribe(
        res => { 
          if(res.status != 1){
            alert(res.message);
          } else{
            localStorage.setItem('token', res.message);
            this._router.navigate(['/home']);
          }
        }
      )
  }
  
}
