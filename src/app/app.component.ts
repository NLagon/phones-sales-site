import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
     console.log("currUser ", this.auth.currentUser ); 
     console.log("objet  ", Object.keys(this.auth.currentUser).length);

  }

  submit() {
    if (Object.keys(this.auth.currentUser).length !== 0)
      this.auth.doLogout();
    else
      this._router.navigateByUrl("/signin-component");
  }



}
