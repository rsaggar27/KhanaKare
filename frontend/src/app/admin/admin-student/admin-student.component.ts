import { Component } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-student.component.html',
  styleUrl: './admin-student.component.css'
})
export class AdminStudentComponent {

  studentGroup = new FormGroup({
    emailid: new FormControl('', Validators.required),
    sid: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    cnumber: new FormControl('', Validators.required),
    branch: new FormControl('', Validators.required),
    hostel: new FormControl('', Validators.required),
  })


  students: any;
  constructor(private master: MasterService) {
    this.fetchStudents();
    this.fetchHostel()
  }

  fetchStudents() {
    this.master.doFetchStudents().subscribe((resp: any) => {
      console.log(resp);
      this.students = resp;
    })
  }

  statusChange(id: string, status: string) {
    status = status == "Active" ? "Deactive" : "Active";
    this.master.statusUpdate(id, status).subscribe((resp: any) => {
      console.log(resp);
      this.fetchStudents();
    })
  }

  hostels: any;
  fetchHostel() {
    this.master.getHostelList().subscribe((resp) => {
      console.log(resp);
      this.hostels = resp;
    })
  }
  id: string = "";

  fetchStudentbyId(id: string) {
    this.id = id;
    this.master.getStudent(id).subscribe(resp => {
      console.log(resp);
      this.studentGroup.setValue({
        emailid: resp.emailid,
        sid: resp.sid,
        name: resp.name,
        branch: resp.branch,
        hostel: resp.hostel,
        cnumber: resp.cnumber
      })
    })
  }

  upadateStudent() {
    this.master.updateStudent(this.id, this.studentGroup.value).subscribe(resp => {
      console.log(resp);
      this.fetchStudents();
    })
  }

}

