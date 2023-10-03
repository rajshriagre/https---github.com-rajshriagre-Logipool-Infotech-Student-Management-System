import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-batchmates',
  templateUrl: './batchmates.component.html',
  styleUrls: ['./batchmates.component.css']
})
export class BatchmatesComponent 
{

  public Batchmates:any="";
  constructor(private http:HttpClient)
  {

  }
  GetBatchemates()
  {
    this.http.get("http://localhost:5100/student/login").subscribe(data=> {
      this.Batchmates= data;
    })
  }
 
}
