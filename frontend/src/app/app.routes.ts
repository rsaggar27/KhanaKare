import { Routes } from '@angular/router';

import { AdminComponent } from './admin/admin/admin.component';
import { MessComponent } from './mess/mess/mess.component';
import { StudentComponent } from './student/student/student.component';

import { AdminFeedbackComponent } from './admin/admin-feedback/admin-feedback.component';
import { AdminHostelFormComponent } from './admin/admin-hostel-form/admin-hostel-form.component';
import { AdminMessComponent } from './admin/admin-mess/admin-mess.component';
import { AdminMessFormComponent } from './admin/admin-mess-form/admin-mess-form.component';
import { AdminStudentComponent } from './admin/admin-student/admin-student.component';
import { AdminStudentFormComponent } from './admin/admin-student-form/admin-student-form.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
import { AdminHostelComponent } from './admin/admin-hostel/admin-hostel.component';

import { MessFeedbackComponent } from './mess/mess-feedback/mess-feedback.component';
import { MessMenuComponent } from './mess/mess-menu/mess-menu.component';
import { MessMenuFormComponent } from './mess/mess-menu-form/mess-menu-form.component';
import { MessProfileComponent } from './mess/mess-profile/mess-profile.component';
import { MessRebatesComponent } from './mess/mess-rebates/mess-rebates.component';
import { MessSettingsComponent } from './mess/mess-settings/mess-settings.component';
import { MessDashComponent } from './mess/mess-dash/mess-dash.component';

import { StudentFeedbackFormComponent } from './student/student-feedback-form/student-feedback-form.component';
import { StudentMenuComponent } from './student/student-menu/student-menu.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentRebateFormComponent } from './student/student-rebate-form/student-rebate-form.component';
import { StudentSettingsComponent } from './student/student-settings/student-settings.component';
import { StudentDashComponent } from './student/student-dash/student-dash.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path:'',component:HomeComponent,title:'Home' },
    {path:'login/:id',component:LoginComponent,title:'Login'},
    { path:'admin',component:AdminComponent,title:'Dashboard',
    children:[
        {path:'dash',component:AdminDashComponent,title:'Feedbacks'}, 
        {path:'hostel',component:AdminHostelComponent,title:'Feedbacks'}, 
        {path:'feedback',component:AdminFeedbackComponent,title:'Feedbacks'},
        { path:'hostel-form',component:AdminHostelFormComponent,title:'Add Hostel'}, 
        { path:'mess-form',component:AdminMessFormComponent,title:'Add Mess'}, 
        { path:'mess',component:AdminMessComponent,title:'Mess'}, 
        { path:'student-form',component:AdminStudentFormComponent,title:'Add Student'}, 
        { path:'student',component:AdminStudentComponent,title:'Student'}, 
    ]
    },
    { path:'mess',component:MessComponent,title:'Dashboard',
    children:[
        {path:'dash',component:MessDashComponent,title:'Dashboard'}, 
        {path:'feedback',component:MessFeedbackComponent,title:'Feedback'},
        {path:'menu',component:MessMenuComponent,title:'Menu'},
        {path:'menu-form',component:MessMenuFormComponent,title:'Edit Menu'},
        {path:'profile',component:MessProfileComponent,title:'Profile Page'},
        {path:'rebate',component:MessRebatesComponent,title:'Rebates'},
        {path:'settings',component:MessSettingsComponent,title:'Settings'},
    ]
    }, 
    { path:'student',component:StudentComponent,title:'Dashboard',
    children:[
        {path:'dash',component:StudentDashComponent,title:'Dashboard'}, 
        {path:'feedback-form',component:StudentFeedbackFormComponent,title:'Give Feedback'},
        {path:'menu',component:StudentMenuComponent,title:'Menu'},
        {path:'profile',component:StudentProfileComponent,title:'Profile Page'},
        {path:'rebate-form',component:StudentRebateFormComponent,title:'Add Rebate'},
        {path:'settings',component:StudentSettingsComponent,title:'Settings'},
    ]
    },
    
];