import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `<div class="d-flex justify-content-center">
              Upcoming Angular Events 
              {{event1|json}}
            </div>
            <hr/>`,
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

}
