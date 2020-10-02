import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// This service sends signup, login HTTP POST requests to back-end.
const AUTH_API = 'http://localhost:8082/login/';
const BASE_URL = 'http://localhost:8082/api/user/';
// json header 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
// credintails is a object we have not created.
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API, {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  register(user): Observable<any> {
    return this.http.post(BASE_URL + 'register',{
      username: user.username,
      password: user.password
    }, httpOptions);
  }
}
