import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService ) {
    this.userForm = this.fb.group({
      name: null,
      email: null,
      password: null
    });
  }

  ngOnInit(): void {
  }


  submit(){
    this.auth.signUp(this.userForm.value).subscribe(
      // (result) => {console.log("ouiouou  ", result)},
      // error => {console.log("ici c'est ", error)}
    );    
    console.log("value user", this.userForm.value);
  }

}
