import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError, of, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  errMsg: string = "";

  constructor(private http: HttpClient, public router: Router) { }

  //INSCRIPTION
  signUp(user: User) {

    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user, {headers: this.headers}).pipe(catchError(this.handleError));
    // .pipe(catchError((err) => { console.log("errorrr"); return throwError(() => new Error(err)) }) 
    // catchError a pour paramètre une autre fonction

    // 
    // return EMPTY // ON peut aussi mettre EMPTY qui est un observable qui retourne rien,
    // cela empêchera d'avoir un message si on souscrit à la signUp, cela nous intéresse pas ici
    // nous voulons un message d'erreur
    // );
  }

  //Connexion
  signIn(user: User) {
    let api = `${this.endpoint}/signin`;
    return this.http
      .post<any>(api, user, {headers: this.headers})
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token); // on reçoit un token lorsqu'on poste les identifiants, fichier auth.routes.js la méthode json : res.status(200).json ({})
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['user-profile/' + res.msg._id]);// naviguer à l'aide des informations obtenues en retour, notamment l'id
        });
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.currentUser = {};
      console.log("curr ", this.currentUser);
      this.router.navigate(['signin-component']);
    }
  }

  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(msg));
  }


}