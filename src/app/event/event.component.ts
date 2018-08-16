import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `<div class="d-flex justify-content-center">
              Upcoming Angular Events 
            </div>
            <hr/>
            <app-evet-thumbnail #thumbnail [event]="event1" (buttonClick)="handleClick()"></app-evet-thumbnail>
            <button class="btn btn-primary" (click)="thumbnail.logChange()">click to see</button>`,
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  public event1 = {
    id: 1,
  name: 'Angular Connect',
  date: '9/26/2036',
  time: '10:00 am',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1057 DT',
    city: 'London',
    country: 'England'
  }
  }
  constructor() { 
    // const data:any = JSON.parse(this.event1);

  }

  ngOnInit() {
  }
  handleClick(){
    console.log('@output working');
    
  }
}
