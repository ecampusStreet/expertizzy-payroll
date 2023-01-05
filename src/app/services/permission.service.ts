import { Injectable } from '@angular/core';
import{observable, Subject} from'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PermissionService {

   subject = new Subject<any>();
  constructor() { }

  sendClickEvent(data:any){
    // this.subject.next()
    console.log(data,'data');
    this.subject.next(data);
  }
}
