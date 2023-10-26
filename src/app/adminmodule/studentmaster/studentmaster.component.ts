import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentmaster',
  templateUrl: './studentmaster.component.html',
  styleUrls: ['./studentmaster.component.css']
})
export class StudentmasterComponent implements OnInit
{

   //add student form object
   addStudentForm:FormGroup;
   updateStudentForm:FormGroup;
 
 
   selectedId:any;
 
   //dummy data
   studentDetails:any=[];
   
   //for "course" select box in modal box
   courseDetails:any[]=[];
 
   //for "batch" select box in modal box
   batchDetails:any=[];
 
   //for "status" select box in modal box
   
   status:string[]=["Active","InActive"];
 
   
 
   
 
   constructor(public http :HttpClient)
   {
     //creating a form Object of add student form
     this.addStudentForm=new FormGroup({
 
       'firstname':new FormControl(null,Validators.required),
       'lastname':new FormControl(null,[Validators.required]),
       'emailid':new FormControl(null,[Validators.required,Validators.email]),
       'contactnumber':new FormControl(null,Validators.required),
       'batch':new FormControl(null,Validators.required),
       'course':new FormControl(null,Validators.required),
       'status':new FormControl(null,Validators.required)
     });
 
     this.updateStudentForm=new FormGroup({
       
       'updatedfirstname':new FormControl(null,Validators.required),
       'updatedlastname':new FormControl(null,[Validators.required]),
       'updatedemailid':new FormControl(null,[Validators.required,Validators.email]),
       'updatedcontactnumber':new FormControl(null,Validators.required),
       'updatedbatch':new FormControl(null,Validators.required),
       'updatedcourse':new FormControl(null,Validators.required),
       'updatedstatus':new FormControl(null,Validators.required)
 
     })
   }
 
 
 
     //get student api call
     ngOnInit(): void {
      this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
        console.log(data.allCourses);
         this.courseDetails=data.allCourses;
         
      });

      this.http.get("http://localhost:3000/admin/getAllBatch").subscribe((data:any)=>{
      console.log(data);
      console.log(data.allBatches);
       this.batchDetails=data.allBatches
       ;
    });

      this.http.get("http://localhost:3000/admin/getAllStudent").subscribe((data:any)=>{
        console.log('25/10')
        console.log(data)
        console.log("all students data");
      console.log(data.allStudentRecords);
       this.studentDetails=data.allStudentRecords;
       console.log(this.studentDetails);
    
    });
 

 
   }
 
   getAllStudents()
   {
      //get student api call
      this.http.get("http://localhost:3000/admin/getAllStudent").subscribe((data:any)=>{
        console.log('25/10')
        console.log(data)
      console.log(data.allStudentRecords);
       this.studentDetails=data.allStudentRecords;
       console.log(this.studentDetails);
    });
   }
 
 
   //add student logic
   addStudent()
   {   
     console.log("inside addStudent()");
     
       //if form is valid then post form data in database
       console.log(this.addStudentForm);
       console.log(this.addStudentForm.value);
 
       //post data logic ithe lihayache
       let dataToInput={
         
         'firstName':this.addStudentForm.value.firstname,
         'lastName':this.addStudentForm.value.lastname,
         'emailId':this.addStudentForm.value.emailid,
         'contactNumber':this.addStudentForm.value.contactnumber,
         'batchName':this.addStudentForm.value.batch,
         'courseName':this.addStudentForm.value.course,
         'status':this.addStudentForm.value.status
 
       }
       console.log("ywefuasu")
       console.log(dataToInput);
 
       //post api call
       this.http.post("http://localhost:3000/admin/addStudent", dataToInput).subscribe(  (resultData: any) => {
              console.log(resultData);
              console.log(resultData.message);
              console.log(resultData.status);
      
            });
 
     
 
    
     
 
            this.getAllStudents();
     //to reset the value of form(i.e reset all text fileds of form)
     this.addStudentForm.reset();

     //to close modal
     document.getElementById("add_Form_Close_Btn")?.click();
   }
 
 
   //update student logic
 
 
   onUpdate(data:any)
   { 
     console.log(data);
     console.log(data.course);
     console.log(data.batch);
 
     
     this.updateStudentForm.controls['updatedfirstname'].setValue(data.firstname);
     this.updateStudentForm.controls['updatedlastname'].setValue(data.lastname);
     this.updateStudentForm.controls['updatedemailid'].setValue(data.emailid)
     this.updateStudentForm.controls['updatedcontactnumber'].setValue(data.contactnumber)
     this.updateStudentForm.controls['updatedbatch'].setValue(data.batch)
     this.updateStudentForm.controls['updatedcourse'].setValue(data.course)
     this.updateStudentForm.controls['updatedstatus'].setValue(data.status)
     
 
     this.selectedId=data._id;
     
   }
 
   updateStudent()
   {
     console.log("inside update Student");
     console.log(this.updateStudentForm);
     console.log(this.updateStudentForm.value);
     
     //update api call
 
     this.updateStudentForm.reset();
   }
 
   //delete related code
   onDeleteStudent( id: any)
   {
    console.log(id);
 
    this.selectedId=id;
    
   }
   deleteStudent()
   {
 
    console.log(this.selectedId);
     //delete api call
 
 
    this.getAllStudents();
    this.selectedId="";
  
   }
 
}
