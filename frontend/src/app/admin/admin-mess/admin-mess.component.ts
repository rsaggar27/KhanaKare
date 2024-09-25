import { Component } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-mess',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-mess.component.html',
  styleUrl: './admin-mess.component.css'
})
export class AdminMessComponent {

  constructor(private master: MasterService) {
    this.fetchMesses();
    this.fetchHostel()
  }

  messGroup = new FormGroup({
    emailid: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    cnumber: new FormControl('', Validators.required),
    ownership: new FormControl('select', Validators.required),
    hostel: new FormControl('select', Validators.required),
  })
  messes:any;
  fetchMesses() {
    this.master.doFetchMesses().subscribe((resp: any) => {
      console.log(resp);
      this.messes = resp;
    })
  }

  statusChange(id: string, status: string) {
    status = status == "Active" ? "Deactive" : "Active";
    this.master.statusUpdate(id, status).subscribe((resp: any) => {
      console.log(resp);
      this.fetchMesses();
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

  fetchMessbyId(id: string) {
    this.id = id;
    this.master.getMess(id).subscribe(resp => {
      console.log(resp);
      this.messGroup.setValue({
        emailid: resp.emailid,
        name: resp.name,
        ownership: resp.ownership,
        hostel: resp.hostel,
        cnumber: resp.cnumber
      })
    })
  }

  upadateMess() {
    this.master.updateMess(this.id, this.messGroup.value).subscribe(resp => {
      console.log(resp);
      this.fetchMesses();
    })
  }

}
