import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  title = 'angular-meanstack-authentication';
  isLogged = "";

  constructor(public _router: Router, public _route: ActivatedRoute, public auth: AuthService) {

    _router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(
        () => {
          if (Object.keys(auth.currentUser).length === 0) {
            this.isLogged = "Se connecter";
          }

          else
            this.isLogged = "Se déconnecter"
        }
      );

  }



  ngOnInit(): void {
    console.log("currUser ", this.auth.currentUser);
    console.log("objet  ", Object.keys(this.auth.currentUser).length);

  }

  submit() {
    if (Object.keys(this.auth.currentUser).length !== 0)
      this.auth.doLogout();
    else
      this._router.navigateByUrl("/signin-component");
  }



}
