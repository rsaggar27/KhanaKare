import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { MessService } from '../../service/mess.service';
import $ from "jquery";

@Component({
  selector: 'app-mess-menu-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mess-menu-form.component.html',
  styleUrl: './mess-menu-form.component.css'
})

export class MessMenuFormComponent {

  constructor(private messObj: MessService) {
    this.doGetMenu();
  }

  days = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"]

  createFormGroup(): FormGroup {
    const formControls: { [key: string]: FormControl } = {};

    for (let i = 0; i < 7; i++) {
      formControls[`m${i}0`] = new FormControl('',Validators.required);
      formControls[`m${i}1`] = new FormControl('',Validators.required);
      formControls[`m${i}2`] = new FormControl('',Validators.required);
      formControls[`m${i}3`] = new FormControl('',Validators.required);
    }

    return new FormGroup(formControls);
  }
  menuGroup = this.createFormGroup();

  doAdd() {
    let f = this.menuGroup.value;
    let d = this.days.map((day, index) => {
      return {
        [day]: [f[`m${index}0`], f[`m${index}1`], f[`m${index}2`], f[`m${index}3`]]
      }
    });
    let mid = localStorage.getItem('userMid') || "";

    this.messObj.doAddMenu(d, mid).subscribe((respJson:any) => {
      console.log(respJson.response);
      $("#spanResp").html(respJson.response);
    })
  }

  doGetMenu() {
    let mid = localStorage.getItem('userMid') || "";

    this.messObj.doGetMenu(mid).subscribe((respJson: any) => {
      console.log(respJson);

      let x = "m"
      for (let i = 0; i < 7; i++) {
        this.menuGroup.patchValue(
          {
            [x + i + '0']: respJson[i].breakfast,
            [x + i + '1']: respJson[i].lunch,
            [x + i + '2']: respJson[i].snacks,
            [x + i + '3']: respJson[i].dinner,
          })

      }
    })
  }
}
