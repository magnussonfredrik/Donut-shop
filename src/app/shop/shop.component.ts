import { Component, OnInit } from '@angular/core'
import { InventoryService } from '../inventory.service'
import { AppState } from './../app.state'
import { Store } from '@ngrx/store'
import * as ShopActions from './../actions/shop.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})


export class ShopComponent implements OnInit {
  ingredients: any = []
  price: number
  inventory: any

  constructor(private invService : InventoryService, private store: Store<AppState>) {
    this.price = 0
  }

  ngOnInit() {
    this.inventory= this.invService.getInventory()
  }

  onNotify(card:any):void {
    console.log(card.ingredient)
    console.log(card.selected)
    if (card.selected){
      this.ingredients.push(card.ingredient);
      this.price = this.price + card.price
    } else {
     this.ingredients.splice(this.ingredients.indexOf(card.ingredient), 1 );
     this.price = this.price - card.price
    }
  }

  addDonut(donut:any) {
    this.store.dispatch(new ShopActions.AddDonut({ingredients: this.ingredients, price: this.price}) )
    this.ingredients = [];
  }

}
