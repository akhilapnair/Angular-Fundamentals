import { Routes } from '@angular/router';

import { EventComponent } from "./event/event.component";
import { EventDetailsComponent } from "./event-details/event-details.component";



export const routes:Routes = [
    { path :'event',component : EventComponent},
    { path :'event/:id',component : EventDetailsComponent},
    {path:'',redirectTo:'/event',pathMatch:'full'}
]