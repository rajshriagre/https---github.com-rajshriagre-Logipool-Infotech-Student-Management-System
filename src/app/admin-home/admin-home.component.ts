import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  totalStudents:number;
   totalTrainers:number;
   totalCourses:number;

   constructor()
   {
     this.totalStudents=400;
     this.totalTrainers=10;
     this.totalCourses=5;
   }
}
