import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  constructor(private http: HttpClient) {}

  getAll(): Observable< any >  
  {
    return this.http.get('http://localhost:8080/api/movies/getMovies');
  }
  
  get(x:String): Observable< any > 
  {
    return this.http.get('http://localhost:8080/api/movies/getMovie/' + x)
  }
  addMovie(movie: any): Observable< any >
  {
    let response: Observable<Object>
    response = this.http.post('http://localhost:8080/api/movies/postMovie', movie);
    return response;
  }

  updateMovie(id: any, movie: any): Observable< any >{
    let response: Observable<Object>
    response = this.http.put('http://localhost:8080/api/movies/update/'+ id,  movie);
    return response;
  }
}
