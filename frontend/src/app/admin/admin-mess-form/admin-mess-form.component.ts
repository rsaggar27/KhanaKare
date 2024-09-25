import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-admin-mess-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './admin-mess-form.component.html',
  styleUrl: './admin-mess-form.component.css'
})
export class AdminMessFormComponent {
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
    this._snackBar.open(message, 'Close', {
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
    this.messGroup.patchValue({ password: pass })
  }

  messGroup = new FormGroup({
    emailid: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    cnumber: new FormControl('', Validators.required),
    ownership: new FormControl('select', Validators.required),
    hostel: new FormControl('select', Validators.required),
    status:new FormControl(1,Validators.required),
  })

  doEnroll() {
    // console.log(this.messGroup.value);
    if (this.messGroup.valid) {
      const messData = this.messGroup.value;
      this.master.doEnrollMess(messData).subscribe((resp) => {
        console.log(resp);
        this.openSnackBar('Mess added successfully');
        
      }, (error) => {
        console.error(error);
        this.openSnackBar('Error while adding mess');
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
