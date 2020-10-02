import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token'; // token key will store the token 
const USER_KEY = 'auth-user'; // user key stores

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  signOut() {
    window.sessionStorage.clear();
  } // when the user sign out and clear cache

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  // this will save the token in the browser cache

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  // get this token user stored in cache becasue authenicated in the browser 

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  // store the user in the browser 

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
  // get the user in the browser
}
