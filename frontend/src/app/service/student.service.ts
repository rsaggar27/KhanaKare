import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';

  doGetMid(id:string){
    return this.http.get(this.url+"/student/mess-id/"+id);
  }
}
