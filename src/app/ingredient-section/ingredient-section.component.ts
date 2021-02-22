import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "app-ingredient-section",
  templateUrl: "./ingredient-section.component.html",
  styleUrls: ["./ingredient-section.component.css"]
})
export class IngredientSectionComponent implements OnInit {
  @Output() notify: EventEmitter<any> = new EventEmitter<any>()
  @Input() ingredients: any

  constructor() {}

  ngOnInit() {
    console.log("section", this.ingredients)
  }

  onNotify(card: any): void {
    this.notify.emit(card)
  }
}
