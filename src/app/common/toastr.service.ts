import { Injectable } from '@angular/core';

let toastr:any;
@Injectable()
export class ToastrService {
sucess(message:string,title?:any) {
    toastr.sucess(message,title);

}
}