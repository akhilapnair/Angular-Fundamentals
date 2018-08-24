import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
baseUrl:string = "http://localhost:3000";

constructor(private httpClient : HttpClient) { 

}

get_products(){
    // return this.http.get(path).map(res => {
    //     return res.json();
    //   });
return this.httpClient.get(this.baseUrl + '/event').map(res=>{return res});
}
}