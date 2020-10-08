import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class Data {
  name:any;
  email:any;
  number:any;
  constructor(private http:HttpClient) {

    
    
   }

   getData(){
     return this.http.get('https://jsonplaceholder.typicode.com/users')
      
  }
}