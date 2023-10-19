import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moduletopicmaster',
  templateUrl: './moduletopicmaster.component.html',
  styleUrls: ['./moduletopicmaster.component.css']
})
export class ModuletopicmasterComponent {

  //add ModuleTopic from object
  addModuleTopicForm:FormGroup;
  updateModuleTopicForm:FormGroup;


  selectedId:any;


  //dummy data
  moduletopicDetails:any=[];


  //for "course" select box in modal box
  courseDetails:any=[];

  //for "module" select box in modal box
  moduleDetails:any=[];

  courses:any=[];
  module:any=[];
  constructor(public http :HttpClient)
    {
       //Creating a form object of add student form
       this.addModuleTopicForm= new FormGroup({


        'coursename': new FormControl(null,Validators.required),
        'modulename': new FormControl(null,Validators.required),
        'topicname': new FormControl(null,Validators.required)
       });
    

    
    this.updateModuleTopicForm= new FormGroup({


      'updatedcoursename': new FormControl(null,Validators.required),
      'updatedmodulename': new FormControl(null,Validators.required),
      'updatedtopicname': new FormControl(null,Validators.required)
    })

                                                                  
}

ngOnInit(): void {
 
      //get moduletopic api call
      //for course select box
    this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
      console.log(data.allCourses);
      console.log('"hadsvz')
       this.courses=data.allCourses;
       console.log(this.courses);
    });

    //for rendering in table
    this.http.get("http://localhost:3000/admin/getAllModule").subscribe((data:any)=>{
      console.log(data);
      this.module=data.allModules;
      console.log("rajshriii ")
      console.log(this.module)
       
    });

    //for rendering in table
    this.http.get("http://localhost:3000/admin/getAllTopics").subscribe((data:any)=>{
      console.log(data);
      this. moduletopicDetails=data.allModulesTopics;
      console.log("rajshriii ")
      console.log(this. moduletopicDetails)
       
    });

}

// getAllModuleTopics()
// {
//      //get moduletopic api call
//      this.http.get("http://localhost:3000/admin/getAllTopics").subscribe((data:any)=>{
//       console.log(data);
//       this. moduletopicDetails=data.allModulesTopics;
//       console.log("rajshri")
//       console.log(this. moduletopicDetails)
       
//     });
// }

//add ModuleTopic Logic
addModuleTopic()
{
  console.log("inside addModuleTopic()");
  
    //If form is valid then post form data in database
    console.log(this.addModuleTopicForm);
    console.log(this.addModuleTopicForm.value);

    //post data logic 
    let dataToInput={
      'courseName':this.addModuleTopicForm.value.coursename,
      'moduleName' :this.addModuleTopicForm.value.modulename,
      'topicName' :this.addModuleTopicForm.value.topicname
    }

    console.log(dataToInput);

    //post api call

    this.http.post("http://localhost:3000/admin/addTopic", dataToInput).subscribe(  (resultData: any) => {
    console.log("Agre");    
    console.log(resultData);
        console.log(resultData.message);
        console.log(resultData.status);
        
      });

     
    this.moduletopicDetails.push(dataToInput);



    //to close modal
    let closeButton=document.getElementById("add_Form_Close_Btn");
    closeButton?.click();

  

  //to reset the value of form(if we want to reset all the textfeilds of the form)
  this.addModuleTopicForm.reset();
}



//update ModuleTopic Logic

onUpdate(data:any)
{
  console.log(data);
  console.log(data.coursename);
  console.log(data.modulename);


  this.updateModuleTopicForm.controls['updatedcoursename'].setValue(data.coursename)
  this.updateModuleTopicForm.controls['updatedmodulename'].setValue(data.modulename)
  this.addModuleTopicForm.controls['updatedtopicname'].setValue(data.topicname)



this.selectedId=data._id;

}


updateModuleTopic()
{
  console.log("Inside Update ModuleTopic");
  console.log(this.updateModuleTopicForm);
  console.log(this.updateModuleTopicForm.value);


  //update api call

  this.updateModuleTopicForm.reset();
}

//delete realted code
onDeleteModuleTopic( id:any)
{
  console.log(id);

  this.selectedId=id;
}

deleteModuleTopic()
{
  console.log(this.selectedId);
  //delete api call


  // this.getAllModuleTopics();
  this.selectedId="";
}
}
