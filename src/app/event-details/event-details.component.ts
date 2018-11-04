import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventValue: any;

  constructor(private service : AppService,private toastr: ToastrService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.service.get_products().subscribe((obj:any)=>{
      let data = obj;
      let id = this.route.snapshot.params['id']
      this.eventValue = data.find(event=> event.id == id)
    });
  }

}
