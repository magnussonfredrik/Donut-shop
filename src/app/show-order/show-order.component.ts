import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Donut } from '../models/shop.model';
import { AppState } from '../app.state';
import * as ShopActions from '../actions/shop.actions';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  // Section 1
  order: Observable<Donut[]>;

  // Section 2
  constructor(private store: Store<AppState>) { 
    this.order = store.select('donut');
  }


  delDonut(index) {
    this.store.dispatch(new ShopActions.RemoveDonut(index))
  }

  ngOnInit() {
    console.log(this.order);
    
  }

}

