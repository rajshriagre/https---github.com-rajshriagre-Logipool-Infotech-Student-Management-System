import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trainermaster',
  templateUrl: './trainermaster.component.html',
  styleUrls: ['./trainermaster.component.css']
})
export class TrainermasterComponent {
  trainerDetails:any=[
    {_id:"22",firstName:"shubham",lastName:"mayane",emailId:"shubham@gmail.com",contactNumber:"23234234123",status:"Active"}
  ]

  //creating addTrainer Form object
   addTrainerForm:FormGroup;
   //creating updateTrainer Form object
   updateTrainerForm:FormGroup;


   //for updation and delete operation
   selectedId:string="";


  constructor()
  {

    //add Trainer Form Object creation start-----
    this.addTrainerForm= new FormGroup({
      "firstname":new FormControl(null,Validators.required),
      "lastname":new FormControl(null,Validators.required),
      "emailid":new FormControl(null,Validators.required),
      "contactnumber":new FormControl(null,Validators.required),
      "status":new FormControl(null,Validators.required),
    })
   //add Trainer Form Object Creation end-----


   //add Trainer Form Object creation start-----
   this.updateTrainerForm= new FormGroup({
    "updatedfirstname":new FormControl(null,Validators.required),
    "updatedlastname":new FormControl(null,Validators.required),
    "updatedemailid":new FormControl(null,Validators.required),
    "updatedcontactnumber":new FormControl(null,Validators.required),
    "updatedstatus":new FormControl(null,Validators.required),
  })
 //add Trainer Form Object Creation end-----
  
  }

//add trainer start ----------------------
  addTrainer()
  {   
    // console.log(this.addTrainerForm);
    // console.log(this.addTrainerForm.value);
    let dataToInsert:any={

      firstName:this.addTrainerForm.value.firstName,
      lastName:this.addTrainerForm.value.lastname,
      emailId:this.addTrainerForm.value.emailid,
      contactNumber:this.addTrainerForm.value.contactnumber,  
      status:this.addTrainerForm.value.status,
      role:"Trainer"
  }
  console.log(dataToInsert);

  //post api call start

  //post api call end

  this.addTrainerForm.reset();

  //to close opened  modal box
  let closeModalBoxBtn=document.getElementById("add_Form_Close_Btn");
  closeModalBoxBtn?.click();



  }

//add trainer end ----------------------






//update trainer code start

  onUpdateTrainer(data:any)
  {
    console.log(data);

    this.updateTrainerForm.controls["updatedfirstname"].setValue(data.firstName);
    this.updateTrainerForm.controls["updatedlastname"].setValue(data.lastName);
    this.updateTrainerForm.controls["updatedemailid"].setValue(data.emailId);
    this.updateTrainerForm.controls["updatedcontactnumber"].setValue(data.contactNumber);
    this.updateTrainerForm.controls["updatedstatus"].setValue(data.status);

    this.selectedId=data._id;

  }

  updateTrainer()
  { 

    // console.log(this.updateTrainerForm.value);
    let updatedDataToInsert:any={

      firstName:this.updateTrainerForm.value.updatedfirstname,
      lastName:this.updateTrainerForm.value.updatedlastname,
      emailId:this.updateTrainerForm.value.updatedemailid,
      contactNumber:this.updateTrainerForm.value.updatedcontactnumber,  
      status:this.updateTrainerForm.value.updatedstatus,
      role:"Trainer"
  }
  console.log(updatedDataToInsert);


  //update api call start



  //update api call end



  //to close modal box
  document.getElementById("update_Form_Close_Btn")?.click();

  //to rest update traine form
  this.updateTrainerForm.reset();

  this.selectedId="";


  }


  //update trainer code end

  //update trainer code end
  onDeleteTrainer(id:any)
  { 
    this.selectedId=id;
    console.log("inside onDeleteTrainer():"+this.selectedId);
    
  }

  deleteTrainer()
  { 
    console.log("inside delete trainer():"+this.selectedId);

    //delete api call


    //to close modal
    document.getElementById("delete-modal-close-btn")?.click();

  }

}
