import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { BatchmatesComponent } from './batchmates/batchmates.component';
import { StudentDashBoardComponent } from './student-dash-board/student-dash-board.component';
import { ExaminationComponent } from './examination/examination.component';
import { TopicsComponent } from './topics/topics.component';
import { TrainerComponent } from './trainer/trainer.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminmasternavbarComponent } from './adminmodule/adminmasternavbar/adminmasternavbar.component';
import { AdminmainComponent } from './adminmodule/adminmain/adminmain.component';



const routes: Routes = [
 {path:'',component:LoginComponent},
 {path:'home',component:HomeComponent},
 {path:'dashboard',component:StudentDashBoardComponent},
  {path:'assignment',component:AssignmentComponent},
  {path:'batchmates',component:BatchmatesComponent},
  {path:'examination', component:ExaminationComponent},
  {path:'topics', component:TopicsComponent},


  {path:'trainer', component:TrainerComponent},
  {path:'syllabus', component:SyllabusComponent},
  {path:'master',component:AdminmainComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
