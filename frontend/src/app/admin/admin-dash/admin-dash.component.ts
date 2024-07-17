import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-dash',
  standalone: true,
  imports: [AdminHeaderComponent,RouterModule],
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent {

}
