import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-batchtrainermodule',
  templateUrl: './batchtrainermodule.component.html',
  styleUrls: ['./batchtrainermodule.component.css']
})
export class BatchtrainermoduleComponent {

  
    //add batch-trainer-module form object
    addBatchTrainerModuleForm:FormGroup;
    updateBatchTrainerModuleForm:FormGroup;

    selectedId:any;

    
    //dummy data
    batchtrainermoduleDetails:any=[];

    //for "batch" select box in modal box
    batchDetails:any=[];

    //for "course" select box in modal box
    courseDetails:any=[];

    //for "module" select box in modal box
    moduleDetails:any=[];

    //for "trainer" select box in modal box
    trainerDetails:any=[];

    trainerName:any=[];
    BatchDetailsById:any=[];
    


    startDate:any="";
    endDate:any="";

    selectedCourse:any="";
    constructor(public http:HttpClient)
    {
      //creating a form Object of add batch-trainer-module form
      this.addBatchTrainerModuleForm=new FormGroup({

        'batchname':new FormControl(null,Validators.required),
        'coursename':new FormControl(null,Validators.required),
        // '_id':new FormControl(null,Validators.required),
  
        'modulename':new FormControl(null,Validators.required),
        'trainername':new FormControl(null,Validators.required),
        'startdate':new FormControl(null,Validators.required),
        'enddate':new FormControl(null,Validators.required)
      });

      this.updateBatchTrainerModuleForm=new FormGroup({

        'updatedbatchname':new FormControl(null,Validators.required),
        'updatedcoursename': new FormControl(null,Validators.required),
        'updatedmodulename':new FormControl(null,Validators.required),
        'updatedtrainername': new FormControl(null,Validators.required),
        'updatedstartdate': new FormControl(null,Validators.required),
        'updatedenddate': new FormControl(null,Validators.required)

      })
    }

    ngOnInit(): void{

    this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
      console.log(data.allCourses);
       this.courseDetails=data.allCourses;
    });

    this.http.get("http://localhost:3000/admin/getAllBatchTrainerModule").subscribe((data:any)=>{
        console.log('25/10')
        console.log(data)
        this.batchtrainermoduleDetails=data.details;
        console.log(this.batchtrainermoduleDetails)
  });


    this.http.get("http://localhost:3000/admin/getAllTrainer").subscribe((data:any)=>{
      console.log('25/10')
      console.log(data)
      console.log("all Trainers data");
    
     this.trainerDetails=data.allTrainerRecords;
     console.log(this.trainerDetails);
     
     for(let i=0;i<this.trainerDetails.length;i++)
     {
      console.log(this.trainerDetails[i].firstName+' '+this.trainerDetails[i].lastName);
      this.trainerName.push(this.trainerDetails[i].firstName+' '+this.trainerDetails[i].lastName);
     }
     console.log(this.trainerName);});
    }

    getBatch(data:any)
    {
      
      console.log(data);
      var selectedCourse:any={
        'courseName':this.addBatchTrainerModuleForm.value.coursename
      }

      let url="http://localhost:3000/admin/getBatch/"+selectedCourse.courseName;
      console.log(url);
      this.http.get(url).subscribe((data:any)=>{
        console.log('25/10')
        this.batchDetails=data.batches;
        for(let i=0; i>this.batchDetails.length;i++)
        {
          this.startDate.push(this.batchDetails[i].startDate);
        }
        console.log(this.startDate)

      });
    }
    getBatchById(data:any)
    {
      console.log("sakshi")
      console.log(data);
      var selectedBatchById:any={
        'batchId':this.addBatchTrainerModuleForm.value.batchname
      }
     
      console.log(selectedBatchById.batchId)
      let url="http://localhost:3000/admin/getBatchById/"+selectedBatchById.batchId;
      this.http.get(url).subscribe((data:any)=>
      {
        // this.BatchDetailsById=data;
        console.log(data.batch[0].startDate);
        console.log(data.batch[0].endDate);
        this.startDate=data.batch[0].startDate,
        this.endDate=data.batch[0].endDate
      })
      // console.log(this.BatchDetailsById)
    }

    getModule(data:any)
      {
        console.log("Agre")
        console.log(data);
        var selectedCourse:any={
          'courseName':this.addBatchTrainerModuleForm.value.coursename
        }
        console.log(selectedCourse);
        let url="http://localhost:3000/admin/getModule/"+selectedCourse.courseName;
   
      this.http.get(url).subscribe((data:any)=>{
        console.log('25/10')
        console.log(data)
        this.moduleDetails=data.module;
      });
    }
        
      
    getAllBatchTrainerModule()
    {
       //get batchtrainermodule api call
       this.http.get("http://localhost:3000/admin/getAllBatchTrainerModule").subscribe((data:any)=>{
        console.log('25/10')
        console.log(data)
        this.batchtrainermoduleDetails=data.details;
        console.log(this.batchtrainermoduleDetails)

   
    });
    }

    //add batchtrainermodule logic
    addBatchTrainerModule()
    {
      console.log("inside addBatchTrainerModule()");

        //if form is valid then post data in database
        console.log(this.addBatchTrainerModuleForm);
        console.log(this.addBatchTrainerModuleForm.value);
        //post data logic
        let dataToInput={
        
          'batchName':this.addBatchTrainerModuleForm.value.batchname,
          'courseName':this.addBatchTrainerModuleForm.value.coursename,
          'moduleName':this.addBatchTrainerModuleForm.value.modulename,
          'trainerFullName':this.addBatchTrainerModuleForm.value.trainername,
          'startDate':this.startDate,
          'endDate':this.endDate
        }

        //post api call

        console.log("eywqdgdh")
        console.log(dataToInput);
        this.http.post("http://localhost:3000/admin/addBatchTrainerModule", dataToInput).subscribe(  (resultData: any) => {
              console.log(resultData);
              console.log(resultData.message);
              console.log(resultData.status);
              this.getAllBatchTrainerModule();
      
            });
        // this.batchtrainermoduleDetails.push(dataToInput);


        //to close modal
        let closeButton=document.getElementById("add_Form_Close_Btn");
        closeButton?.click();

      //to reset the value of form(i.e reset all text fileds of form)
      this.addBatchTrainerModuleForm.reset();
    }

    //update batchtrainermodule logic


    onUpdate(data:any)
    {
      console.log("Inside OnUpdate")
      console.log(data);
      // console.log(data.batchName);
      // console.log(data.courseName);
      // console.log(data.moduleName);
      // console.log(data.trainerName);

      this.updateBatchTrainerModuleForm.controls['updatedbatchname'].setValue(data.batchName)
      this.updateBatchTrainerModuleForm.controls['updatedcoursename'].setValue(data.courseName)
      this.updateBatchTrainerModuleForm.controls['updatedmodulename'].setValue(data.moduleName)
      this.updateBatchTrainerModuleForm.controls['updatedtrainername'].setValue(data.trainerName)
      this.updateBatchTrainerModuleForm.controls['updatedstartdate'].setValue(data.startdate)
      this.updateBatchTrainerModuleForm.controls['updatedenddate'].setValue(data.enddate)


      this.selectedId=data._id;

    }

    updateBatchTrainerModule()
    {
      console.log("inside Updated Batch Trainer Module");
      console.log(this.updateBatchTrainerModuleForm);
      console.log(this.updateBatchTrainerModuleForm.value);

      //update api call

      this.updateBatchTrainerModuleForm.reset();
    }

    //delete related code
    onDeleteBatchTrainerModule( id: any)
    {
      console.log(id);


      this.selectedId=id;
    }

    deleteBatchTrainerModule()
    {
      console.log(this.selectedId);
      //delete api call


      this.getAllBatchTrainerModule();
      this.selectedId="";
    }
}
