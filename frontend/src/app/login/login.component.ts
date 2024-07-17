
import { Component, inject, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../service/master.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatIcon, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
id="none";
route: ActivatedRoute = inject(ActivatedRoute)
  constructor(private master:MasterService, private router: Router){
     this.route.params.subscribe(js=>{
      this.id=js['id'];
      
     })
  }

 

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginForm = new FormGroup({
    email: new FormControl(""),
    pwd: new FormControl("")

  })

  onLogin() {
    // console.log("in the fn")
    let data=this.loginForm.value;
    if(this.id=="Student"){
      // console.log("in the fn")
      this.master.doLoginStudent(data).subscribe((resp)=>{
        console.log(resp);
        if(resp.response=='success' ){
          localStorage.setItem('userId',resp.userId)
          this.router.navigate(['/student/dash']);
        }
      });
    }

    if(this.id=="Mess"){
      // console.log("in the fn")
      this.master.doLoginMess(data).subscribe((resp)=>{
        console.log(resp);
      });
    } 

    if(this.id=="Admin"){
      this.master.doLoginAdmin(data).subscribe((resp)=>{
        console.log(resp);
      })
    }
  }
}
