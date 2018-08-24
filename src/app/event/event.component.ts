import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-event',
  template: `<div class="d-flex justify-content-center">
              Upcoming Angular Events 
            </div>
            <hr/>
            <app-evet-thumbnail *ngFor="let event of eventData"[event]="event" (buttonClick)="handleClick()"></app-evet-thumbnail>`,
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
