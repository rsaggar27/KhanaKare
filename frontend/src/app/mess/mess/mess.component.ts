import { Component } from '@angular/core';
import { RouterEvent, RouterOutlet } from '@angular/router';
import { MessHeaderComponent } from '../mess-header/mess-header.component';
@Component({
  selector: 'app-mess',
  standalone: true,
  imports: [RouterOutlet,MessHeaderComponent],
  templateUrl: './mess.component.html',
  styleUrl: './mess.component.css'
})
export class MessComponent {

}
