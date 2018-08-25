import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-event',
  template: `<div class="d-flex justify-content-center">
              Upcoming Angular Events 
            </div>
            <hr/>
            <div class="row">
            <div class="col-md-5" *ngFor="let event of eventData">
            <app-evet-thumbnail [event]="event" (buttonClick)="handleClick()"></app-evet-thumbnail>
            </div>
            </div>
            `,
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  eventData: any;
  testResponse: void;
  constructor(private eventservice: AppService) { 

  }

  ngOnInit() {
        this.eventservice.get_products().subscribe(
      data => {
        console.log(data)
        this.eventData = data;
        return data
      }
      
  );
  }
}
