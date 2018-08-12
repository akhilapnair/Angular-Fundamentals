import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EvetThumbnailComponent } from './event/evet-thumbnail/evet-thumbnail.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EvetThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
