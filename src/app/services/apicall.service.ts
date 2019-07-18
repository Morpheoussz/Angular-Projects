import { Injectable } from '@angular/core';
//import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  private ep:string ='http://localhost/schoolproject/schoolproject.php';

  constructor( private http: HttpClient) { 
  }
  postData(payload){
    //return this.http.post(this.ep,JSON.stringify(payload)).pipe (map((res:Response)=>res));
    return this.http.post(this.ep,JSON.stringify(payload));
  }

   
}
