import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { Router } from '@angular/router';
import { LogipoolService } from '../logipool.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  emailId : string ="";
  password : string ="";
  show: boolean= false;
   constructor(private router: Router, private http: HttpClient)
   {}
  
  login()
  {
  console.log("user name is " + this.emailId)
  let bodydata ={
    emailId:this.emailId,
    password:this.password
  };
  
  this.http.post("http://localhost:5100/student/loginn", bodydata).subscribe(  (resultData: any) => {
        console.log(resultData);
        if (resultData.status) 
        {
      
           this.router.navigateByUrl('/home');
    
        } 
        else
         {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });
  }
}

