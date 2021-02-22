import { Component, OnInit } from '@angular/core';
import { AppState } from './../app.state'
import { Store } from '@ngrx/store'
import * as PersonActions from './../actions/person.actions'


@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.css']
})
export class ContactInfoFormComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  
  firstName: {bajs:string}

  lastName: string

  contactInfo: {}

  submitted = false;


  ngOnInit() {
    console.log(this.firstName);
    
  }

}
