import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-student-rebate-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-rebate-form.component.html',
  styleUrl: './student-rebate-form.component.css'
})
export class StudentRebateFormComponent {
  now: moment.Moment;
  minDate: string;

  startDate: moment.Moment=moment();
  endDate: moment.Moment=moment();
  differenceInDays: number=0;

  rebateGroup = new FormGroup({
    sid: new FormControl('', Validators.required),
    fromDate: new FormControl('', Validators.required),
    fromTime: new FormControl("select", Validators.required),
    toDate: new FormControl('', Validators.required),
    toTime: new FormControl("select", Validators.required),
  })

  constructor() {
    this.now = moment();
    this.minDate = this.now.add(1, 'days').format('YYYY-MM-DD');
    console.log(this.minDate);
  }

  
  meals_skipped:number = 0;
  fromMeal:number=0;
  toMeal:number=0;
  mp=[
    "BreakFast",
    "Lunch",
    "Snacks",
    "Dinner"
  ]


  onSubmit() {
console.log()
    this.startDate = moment(this.rebateGroup.value.fromDate, 'YYYY-MM-DD');
    this.endDate = moment(this.rebateGroup.value.toDate, 'YYYY-MM-DD');
    this.differenceInDays = this.endDate.diff(this.startDate, 'days'); 

    console.log(`Difference in days: ${this.differenceInDays}`);
    
      let a:any=this.rebateGroup.value.fromTime || "";
      let b:any=this.rebateGroup.value.toTime|| "" ;  
      this.fromMeal=this.mp.findIndex(a)
      this.toMeal=this.mp.findIndex(b)

    if(this.differenceInDays<=1){
      this.meals_skipped= (4-this.fromMeal)+(this.toMeal+1)
    }
    else{
      this.meals_skipped=this.differenceInDays*4+((4-this.fromMeal)+(this.toMeal+1));
    }

    console.log(this.meals_skipped);
  }


}
