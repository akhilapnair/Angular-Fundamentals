import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EvetThumbnailComponent } from './event/evet-thumbnail/evet-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EvetThumbnailComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
