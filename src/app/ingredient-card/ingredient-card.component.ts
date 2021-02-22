import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "app-ingredient-card",
  templateUrl: "./ingredient-card.component.html",
  styleUrls: ["./ingredient-card.component.css"]
})
export class IngredientCardComponent implements OnInit {
  @Input() ingredient: any
  @Input() price: any
  @Input() description: any
  @Input() image: any
  @Output() notify: EventEmitter<any> = new EventEmitter<any>()
  selected: boolean = false

  constructor() {}
  ngOnInit() {}

  onClick() {
    if (!this.selected) {
      this.selected = true
      this.notify.emit(this)
    } else {
      this.selected = false
      this.notify.emit(this)
    }
  }
}
