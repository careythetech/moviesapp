import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { authInterceptorProviders } from '../app/_helper/auth-interceptor-providers.interceptor'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { DisplaymoviesComponent } from './displaymovies/displaymovies.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    DisplaymoviesComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
