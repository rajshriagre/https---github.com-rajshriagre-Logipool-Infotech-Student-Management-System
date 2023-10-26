import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  


  loginForm:FormGroup;


   constructor(private router: Router, private http: HttpClient,
    private authService:AuthService,public fb: FormBuilder)
   {

    this. loginForm = this.fb.group({
      "email": ['', Validators.required],
      "password": ['', Validators.required]
  
     });
   }



  


 

 OnSubmit()
 {  
  console.log("inside onSubmit");
  console.log(this.loginForm.value);

  let bodydata ={
    emailId:this.loginForm.value.email,
    password:this.loginForm.value.password
  };

  this.http.post("http://localhost:3000/user/login", bodydata).subscribe(  (resultData: any) => {
    console.log(resultData);
    console.log(resultData.message);
    console.log(resultData.status);
    if (resultData.status) 
    {
       this.authService.isLoggedIn = true;
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

