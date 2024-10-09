import { Component } from '@angular/core';
import { MessService } from '../../service/mess.service';
import { StudentService } from '../../service/student.service';
import $ from "jquery"
@Component({
  selector: 'app-student-menu',
  standalone: true,
  imports: [],
  templateUrl: './student-menu.component.html',
  styleUrl: './student-menu.component.css'
})
export class StudentMenuComponent {
  days = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"]
  constructor(private messObj: MessService, private studentObj: StudentService) {
    this.toGetMid();

  }

  mid = ""
  toGetMid() {
    let sid = localStorage.getItem('userSid') || "";
    this.studentObj.doGetMid(sid).subscribe((respJson: any) => {
      this.mid = respJson.response;
      console.log(this.mid);
      this.doGetMenu();
    })
  }

  doGetMenu() {
    this.messObj.doGetMenu(this.mid).subscribe((respJson: any) => {
      console.log(respJson);

      let x = "m";
      for (let i = 0; i < 7; i++) {
        $(`#${x}${i}0`).val(respJson[i].breakfast);
        $(`#${x}${i}1`).val(respJson[i].lunch);
        $(`#${x}${i}2`).val(respJson[i].snacks);
        $(`#${x}${i}3`).val(respJson[i].dinner);
      }


    })
  }
}
