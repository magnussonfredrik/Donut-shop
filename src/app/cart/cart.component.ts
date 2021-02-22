import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Donut } from './../models/shop.model';
import { AppState } from './../app.state';
import * as ShopActions from './../actions/shop.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  order: Observable<Donut[]>;
  
  constructor(private store: Store<AppState>) {
    this.order = store.select('donut');
  }
  
  delDonut(index) {
    this.store.dispatch(new ShopActions.RemoveDonut(index) )
  }
  ngOnInit() {
  }


}
