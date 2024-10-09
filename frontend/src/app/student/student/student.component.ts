import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentHeaderComponent } from '../student-header/student-header.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterOutlet,StudentHeaderComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
