import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class MessService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  doAddMenu(d:any, id:string){
    return this.http.post(`${this.url}/menu/`,{'d':d, 'id':id});
  }

  doGetMenu(id:string){

    return this.http.get(this.url+"/menu/"+id);
  }
}
