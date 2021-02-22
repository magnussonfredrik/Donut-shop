
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as PersonActions from './../actions/person.actions';



//import { DeliveryInfoFormComponent } from "../app.module"
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {
submitted: boolean
constructor(private store: Store<AppState>) { }

  
addPerson(firstName, lastName, email, phonenumber, adress, zip, city, cardnumber, cardCompany) {

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(phonenumber);
  console.log(adress);
  console.log(zip);
  console.log(city);
  console.log(cardCompany);
  console.log(cardnumber);


  this.store.dispatch(new PersonActions.AddPerson({firstName: firstName, lastName: lastName, eMail: email, zipCode: zip, phoneNumber: phonenumber,
  address: adress, city: city, cardNbr: cardnumber, cardCompany: cardCompany}));  
}

  ngOnInit() {
  }

}
