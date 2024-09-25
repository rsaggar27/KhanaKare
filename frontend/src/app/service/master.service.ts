import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class MasterService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  doLoginStudent(data: any) {
    // console.log("in the service");
    return this.http.post<any>(this.url + '/student/login', data);
  }

  doLoginMess(data: any) {
    // console.log("in the service");
    return this.http.post<any>(this.url + '/mess/login', data);
  }

  doLoginAdmin(data: any) {
    return this.http.post<any>(this.url + '/admin/login', data);
  }

  doEnrollStudent(data: any) {
    return this.http.post<any>(this.url + '/student/sign-up', data);
  }

  doEnrollHostel(data: any) {
    console.log(data);
    return this.http.post<any>(this.url + '/hostel', data);
  }

  getHostelList() {
    return this.http.get<any>(this.url + "/hostel");
  }

  delHostel(id: string) {
    return this.http.delete<any>(this.url + "/hostel/" + id)
  }

  doFetchStudents() {
    return this.http.get<any>(this.url + "/student/");
  }

  statusUpdate(id: string, status: string) {
    return this.http.put<any>(this.url + "/student/status/" + id, { status: status });
  }

  getStudent(id: string) {
    return this.http.get<any>(this.url + "/student/" + id);
  }

  updateStudent(id: string, data: any) {
    return this.http.put<any>(this.url + "/student/" + id, data);
  }

  doEnrollMess(data: any) {
    return this.http.post<any>(this.url + '/mess/sign-up', data);
  }

  doFetchMesses() {
    return this.http.get<any>(this.url + "/mess/");
  }

  updateMess(id: string, data: any) {
    return this.http.put<any>(this.url + "/mess/" + id, data);
  }

  getMess(id: string) {
    return this.http.get<any>(this.url + "/mess/" + id);
  }


}
