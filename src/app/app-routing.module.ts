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
import { BatchtrainermoduleComponent } from './adminmodule/batchtrainermodule/batchtrainermodule.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: '',
        component: StudentDashBoardComponent
      },
      {
        path: 'trainer',
        component: TrainerComponent
      },
      {
        path: 'batchmates',
        component: BatchmatesComponent
      },
      {
        path: 'dashboard',
        component: StudentDashBoardComponent
      },
      {
        path: 'assignment',
        component: AssignmentComponent
      },
      {
        path: 'examination',
        component: ExaminationComponent
      },
      {
        path: 'syllbus',
        component: SyllabusComponent
      },
      {
        path: 'batchtrainermodule',
        component: BatchtrainermoduleComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'master',
        loadChildren: () => import('./adminmodule/adminmodule.module').then(m => m.AdminmoduleModule)
      }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
