import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-trainer-assignment',
  templateUrl: './trainer-assignment.component.html',
  styleUrls: ['./trainer-assignment.component.css']
})
export class TrainerAssignmentComponent {

constructor(public http:HttpClient)
{

}
  uploadAssignment()
  {

    let assignmentDetails={
      assignmentName:"Mean_Assignment_1",
      assignmentURL:"https://drive.google.com/file/d/1Rl96mqPg3W4u6EapJBfiBpKW-9AWYLEo/view?usp=drive_link",
      courseName:"Mean stack",
      moduleName:"Angular"
    }

    console.log(assignmentDetails);
    //post api call

    this.http.post("http://localhost:3000/trainer/addAssignment",assignmentDetails).subscribe((data:any)=>{
      console.log("From Backend" + data.message);
      alert("file is uploaded successfully");
    });
    

    

    //post api call


    
  }
}
