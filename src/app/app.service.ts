import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
baseUrl:string = "http://localhost:3000";
    response: Object;

constructor(private httpClient : HttpClient) { 

}

get_products(){
return this.httpClient.get(this.baseUrl + '/comments').map(data=>{
    data
    console.log('sss',data)
});
}
}