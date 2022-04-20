import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;


  constructor(private fb: FormBuilder, public auth: AuthService, public router: Router ) {
    this.signInForm = this.fb.group({
      name: null,
      email: null,
      password: null
    });
  }

  ngOnInit(): void {
  }

  submit(){
    this.auth.signIn(this.signInForm.value);    
  }

}
