import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evet-thumbnail',
  templateUrl: './evet-thumbnail.component.html',
  styleUrls: ['./evet-thumbnail.component.css']
})
export class EvetThumbnailComponent implements OnInit {
  @Input() event:any;
  constructor() { }

  ngOnInit() {
    console.log('cc',event);
  }

}
