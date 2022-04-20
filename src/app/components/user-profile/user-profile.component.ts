import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:any;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    console.log("user value ", this.auth.currentUser);
    this.user = this.auth.currentUser;
  }


}
