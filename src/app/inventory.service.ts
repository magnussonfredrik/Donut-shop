import { Injectable } from '@angular/core';

const inventory = [
  { type: "Dough",
    ingredients: [
    {name:"Stand", price:1, description:"Standard dough", image:"assets/doughs/stand.svg"},
    {name:"Choco", price:1, description:"Chocolate dough", image:"assets/doughs/choco.svg"},
    {name:"Tiga", price:2, description:"Mixed standard and chocolate dough", image:"assets/doughs/tiga.svg"},
    {name:"Limo", price:1, description:"Lemon dough", image:"assets/doughs/limo.svg"},
  ]},
  { type: "Glaze",
    ingredients: [
    {name:"Rasp", price:1, description:"Raspberry glaze", image:"assets/glazes/rasp.svg"},
    {name:"Vaní", price:1, description:"Vanilla glaze", image:"assets/glazes/vani.svg"},
    {name:"Blueb", price:1, description:"Blueberry glaze", image:"assets/glazes/blueb.svg"},
    {name:"Choco", price:1, description:"Chocolate glaze", image:"assets/glazes/choco.svg"},
  ]},
  { type: "Sprinkles",
    ingredients: [
    {name:"Tutz", price:0.50, description:"Tutti-Frutti sprinkles", image:"assets/sprinkles/tutz.svg"},
    {name:"Choco", price:0.50, description:"Chocolate sprinkles", image:"assets/sprinkles/choco.svg"},
    {name:"Liq", price:0.50, description:"Liquorice sprinkles", image:"assets/sprinkles/liq.svg"},
    {name:"Sug", price:0.25, description:"Sugar", image:"assets/sprinkles/sug.svg"},
  ]}
]

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor() {}

  getInventory(){
    return inventory
  }
}
