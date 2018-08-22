import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testResponse: any;
  constructor(private service:AppService){
    this.service.get_products().subscribe(
      data => this.testResponse = data
  );
  console.log("I CANT SEE DATA HERE: ", this.testResponse);
  }
  title = 'app';
}
