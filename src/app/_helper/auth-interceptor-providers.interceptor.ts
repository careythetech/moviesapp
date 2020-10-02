import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// HttpInterceptor has intercept() method to inspect and transform HTTP requests before they are sent to server.
// AuthInterceptor implements HttpInterceptor. We’re gonna add Authorization header with ‘Bearer’ prefix to the token.

// Interceptor is going to look for that data and extract it. 
// it goes in header and extract token

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptorProvidersInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvidersInterceptor, multi: true }
];