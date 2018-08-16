import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:AppService){
    let data;
    this.service.get_products().subscribe(obj=>{
     data = obj;
    });
    console.log(data)
  }
  title = 'app';
}
