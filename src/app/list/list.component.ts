import { Component, OnInit } from '@angular/core';
import { MovieslistService } from '../services/movieslist/movieslist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  srcpath: string = 'assets/logo.png';
  title: string = 'Testing Directives and Binding';
  listItems: any[];
  user: string = 'Testing attribute directive';

  constructor(private _movieslist: MovieslistService) { 
    this.listItems = this._movieslist.getMovies();
  }

  ngOnInit() {
  }

  onSelect() {
    console.log('button clicked');
  }
}
