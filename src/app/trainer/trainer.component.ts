import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent 
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
