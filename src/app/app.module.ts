import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { MatStepperModule,  } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { InventoryService } from './inventory.service'
import { MatInputModule } from '@angular/material';
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { NavComponent } from "./nav/nav.component"
import { AboutComponent } from "./about/about.component"
import { ShopComponent } from "./shop/shop.component"
import { ContactComponent } from "./contact/contact.component"
import { ConfirmationComponent } from "./confirmation/confirmation.component"
import { CartComponent } from "./cart/cart.component"
import { CheckoutComponent } from "./checkout/checkout.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { IngredientSectionComponent } from './ingredient-section/ingredient-section.component';
import { IngredientCardComponent } from './ingredient-card/ingredient-card.component';
import { ContactInfoFormComponent } from './contact-info-form/contact-info-form.component';
import { DeliveryInfoFormComponent } from './delivery-info-form/delivery-info-form.component';
import { PayingMethodComponent } from './paying-method/paying-method.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/shop.reducer';
import { ShowOrderComponent } from './show-order/show-order.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule }   from '@angular/forms';
import { Person } from './models/person.model'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    ConfirmationComponent,
    CartComponent,
    CheckoutComponent,
    IngredientSectionComponent,
    IngredientCardComponent,
    ContactInfoFormComponent,
    DeliveryInfoFormComponent,
    PayingMethodComponent,
    ShowOrderComponent,
    FooterComponent
  ],
  imports: [BrowserAnimationsModule, BrowserModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatDividerModule, MatListModule, AppRoutingModule, MatStepperModule,
    StoreModule.forRoot({
      donut: reducer,
      person: reducer
    }), MatCardModule, MatGridListModule, MatInputModule, FormsModule],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
