import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-admin-student-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './admin-student-form.component.html',
  styleUrl: './admin-student-form.component.css'
})


export class AdminStudentFormComponent {
  password = '';
  showPassword = false;

  private _snackBar = inject(MatSnackBar);
  constructor(private master: MasterService) {
    this.fetchHostel();
   }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message,"Close", {
      duration: 3000
    });
  }

  generatePass() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random()
        * str.length + 1);

      pass += str.charAt(char)
    }
    this.password = pass;
    console.log(this.password);

    //for the reactive form, iske bina voh read nahi krega 
    this.studentGroup.patchValue({ password: pass })
  }

  studentGroup = new FormGroup({
    emailid: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    sid: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    cnumber: new FormControl('', Validators.required),
    branch: new FormControl('select', Validators.required),
    hostel: new FormControl('select', Validators.required),
  })

  doEnroll() {
    // console.log(this.studentGroup.value);
    if (this.studentGroup.valid) {
      const studentData = this.studentGroup.value;
      this.master.doEnrollStudent(studentData).subscribe((resp) => {
        console.log(resp);
        this.openSnackBar(resp.response);
      }, (error) => {
        console.error(error);
        this.openSnackBar(error.message);
      });
    } else {
      console.log('Form is invalid');
    }
  }
  hostels: any;
  fetchHostel() {
    this.master.getHostelList().subscribe((resp) => {
      console.log(resp);
      this.hostels = resp;
    })
  }
}
