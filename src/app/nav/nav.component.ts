import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Donut } from './../models/shop.model';
import { AppState } from './../app.state';
import * as ShopActions from './../actions/shop.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  order: Observable<Donut[]>;

  constructor(private store: Store<AppState>) { 
    this.order = store.select('donut');
  }

  ngOnInit() {
  }

}
