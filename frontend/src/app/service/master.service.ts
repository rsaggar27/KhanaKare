import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class MasterService {
  url='http://localhost:3000';
  constructor(private http:HttpClient) { }

  doLoginStudent(data:any){
    // console.log("in the service");
    return this.http.post<any>(this.url+'/student/login',data);
  }

  doLoginMess(data:any){
    // console.log("in the service");
    return this.http.post(this.url+'/mess/login',data);
  }

  doLoginAdmin(data:any){
    return this.http.post(this.url+'/admin/login',data);
  }
}
