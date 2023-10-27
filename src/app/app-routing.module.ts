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
import { CourcemasterComponent } from './adminmodule/courcemaster/courcemaster.component';
import { ModulemasterComponent } from './adminmodule/modulemaster/modulemaster.component';
import { ModuletopicmasterComponent } from './adminmodule/moduletopicmaster/moduletopicmaster.component';
import { TrainermasterComponent } from './adminmodule/trainermaster/trainermaster.component';
import { StudentmasterComponent } from './adminmodule/studentmaster/studentmaster.component';
import { BatchmastersComponent } from './adminmodule/batchmasters/batchmasters.component';
import { BatchtrainermoduleComponent } from './adminmodule/batchtrainermodule/batchtrainermodule.component';

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
        path: 'master',
        loadChildren: () => import('./adminmodule/adminmodule.module').then(m => m.AdminmoduleModule)
      }
    ]
  },

]

//   children:[
//    { 

//      path:"adminmain",component:AdminmainComponent,
//      children:[
//          {path: '',component:CourcemasterComponent},
//          {path:'master', component:AdminmasternavbarComponent},
//          {path:'CourseMaster',component:CourcemasterComponent},
//          {path:'ModuleMaster',component:ModulemasterComponent},
//          {path:'ModuleTopicMaster',component:ModuletopicmasterComponent},
//          {path:'TrainerMaster',component:TrainermasterComponent},
//          {path:'StudentMaster',component:StudentmasterComponent},
//          {path:'batchmaster',component:BatchmastersComponent},
//          {path:'batchtrainermodule', component:BatchtrainermoduleComponent} 
//      ]
//    } ]},

//    {path:'dashboard',component:StudentDashBoardComponent},
//    {path:'assignment',component:AssignmentComponent},
//    {path:'batchmates',component:BatchmatesComponent},
//    {path:'examination', component:ExaminationComponent},
//    {path:'topics', component:TopicsComponent},
//    {path:'trainer', component:TrainerComponent},
//    {path:'syllabus', component:SyllabusComponent},
//    {path:'master',component:AdminmainComponent}
//  ];


// const routes: Routes = [
//  {path:'',component:LoginComponent},
//  {path:'home',component:HomeComponent,

//  children:[
//   { 

//     path:"adminmain",component:AdminmainComponent,
//     children:[
//         {path: '',component:CourcemasterComponent},
//         {path:'master', component:AdminmasternavbarComponent},
//         {path:'CourseMaster',component:CourcemasterComponent},
//         {path:'ModuleMaster',component:ModulemasterComponent},
//         {path:'ModuleTopicMaster',component:ModuletopicmasterComponent},
//         {path:'TrainerMaster',component:TrainermasterComponent},
//         {path:'StudentMaster',component:StudentmasterComponent},
//         {path:'batchmaster',component:BatchmastersComponent},
//         {path:'batchtrainermodule', component:BatchtrainermoduleComponent} 
//     ]
//   } ]},

//   {path:'dashboard',component:StudentDashBoardComponent},
//   {path:'assignment',component:AssignmentComponent},
//   {path:'batchmates',component:BatchmatesComponent},
//   {path:'examination', component:ExaminationComponent},
//   {path:'topics', component:TopicsComponent},
//   {path:'trainer', component:TrainerComponent},
//   {path:'syllabus', component:SyllabusComponent},
//   {path:'master',component:AdminmainComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
