import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Person } from './../models/person.model';
import { AppState } from '../app.state';
import * as PersonActions from '../actions/person.actions';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  person: Observable<Person[]>;

  constructor(private store: Store<AppState>) { 
    this.person = store.select('person');
  }

  

  ngOnInit() {
    console.log(this.person);
    
  }

}
