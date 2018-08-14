import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-evet-thumbnail',
  templateUrl: './evet-thumbnail.component.html',
  styleUrls: ['./evet-thumbnail.component.css']
})
export class EvetThumbnailComponent implements OnInit {
  @Input() event:any;
  @Output() buttonClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  submit(){
    console.log('clicked')
    this.buttonClick.emit();
  }
}
