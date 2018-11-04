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
  logChange(){
    console.log('heree');
  }
  submit(){
    this.buttonClick.emit();
  }
}
