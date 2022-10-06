import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  login(data:any):Observable<any>{
  // let url="";
  return this.http.post('http://localhost:8000/login',data);
}
}
