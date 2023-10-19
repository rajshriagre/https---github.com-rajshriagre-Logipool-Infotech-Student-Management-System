import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TrainersidebarComponent } from './trainersidebar/trainersidebar.component';
import { StudentDashBoardComponent } from './student-dash-board/student-dash-board.component';
import { BatchmatesComponent } from './batchmates/batchmates.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExaminationComponent } from './examination/examination.component';
import { TopicsComponent } from './topics/topics.component';
import { TrainerComponent } from './trainer/trainer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { LogipoolService } from './logipool.service';
import { HttpClientModule } from '@angular/common/http';

import { SyllabusComponent } from './syllabus/syllabus.component';
import { SyllabusService } from './syllabus.service';

import { RouterModule } from '@angular/router';
import { AdminmoduleModule } from './adminmodule/adminmodule.module';
import { HomeComponent } from './home/home.component';






@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    NavbarComponent,
    AdminsidebarComponent,
    SidebarComponent,
    TrainersidebarComponent,
    StudentDashBoardComponent,
    BatchmatesComponent,
    LoginComponent,
    ExaminationComponent,
    TopicsComponent,
    TrainerComponent,
    SyllabusComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    RouterModule,
    AdminmoduleModule
   


  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    ],
  providers: [
    LogipoolService,
    SyllabusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
