import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EvetThumbnailComponent } from './event/evet-thumbnail/evet-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { AppService } from './app.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { routes } from './app.routing';
import { ToastrService } from 'src/app/common/toastr.service';




@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EvetThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    // routes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
