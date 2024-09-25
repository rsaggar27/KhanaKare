import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MasterService } from '../../service/master.service';
@Component({
  selector: 'app-admin-hostel-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-hostel-form.component.html',
  styleUrl: './admin-hostel-form.component.css'
})
export class AdminHostelFormComponent {

  constructor(private master:MasterService){
    this.fetchHostel();
  }

  HostelGroup= new FormGroup({
    hostelName: new FormControl('', [Validators.required]),
    hostelType: new FormControl('Boys', [Validators.required])
  })

  addHostel(){
    // console.log("data here!!");
    if(this.HostelGroup.valid){
      const hostelData = this.HostelGroup.value;
      // console.log("data here!!");
      this.master.doEnrollHostel(hostelData).subscribe((resp)=>{
        console.log("hostel saved");
        this.fetchHostel();
      })
    }
  }
  hostels:any;

  fetchHostel(){
    this.master.getHostelList().subscribe((resp)=>{
      console.log(resp);
      this.hostels=resp;
    })
  }

  onDel(id:string){
    this.master.delHostel(id).subscribe((resp)=>{
      console.log("Hostel Deleted");
      this.fetchHostel();
     }) 
  }

}
