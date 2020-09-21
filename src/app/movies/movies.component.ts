import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Array<any>;
  fetchMovie: any;
  movieid: any;
  response: any;
  constructor(private movieservice: MoviesService,
      private route: ActivatedRoute, 
      private router: Router) { }
  
  ngOnInit(): void {
    this.movieservice.getAll().subscribe(data => {
      this.movies = data;
    });
    this.movieservice.get('1').subscribe(movie => {
      this.fetchMovie = movie;
    });
  }
  saveIt(form: NgForm){
    this.movieservice.addMovie(form).subscribe(data => {
      this.response = data;
      // console.log(this.response);
      // console.log(form);
    }, error => console.error(error));
  }
  updateIt(form: NgForm){
    this.movieid = form.controls['id'].value;
    console.log(this.movieid);
    this.movieservice.updateMovie(this.movieid,form).subscribe(data => {
      this.response = data;
      // console.log(this.response);
      // console.log(form);
    }, error => console.error(error));
  }
}
