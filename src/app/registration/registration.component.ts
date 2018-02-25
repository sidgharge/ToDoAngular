import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {

    this.form = new FormGroup({
      firstName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)])),
      lastName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)])),
      contact: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[0-9]{10}$")])),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.compose([Validators.required, Validators.minLength(8)]))
    });

  }

  register(user){
    this._loginService.register(user)
      .subscribe(
        res => { 
          if(res.status != 1){
            alert(res.message);
          }
        }
      )
  }

}
