import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentmasterComponent } from './studentmaster/studentmaster.component';
import { CourcemasterComponent } from './courcemaster/courcemaster.component';
import { ModulemasterComponent } from './modulemaster/modulemaster.component';
import { ModuletopicmasterComponent } from './moduletopicmaster/moduletopicmaster.component';
import { TrainermasterComponent } from './trainermaster/trainermaster.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { BatchtrainermoduleComponent } from './batchtrainermodule/batchtrainermodule.component';
import { AdminmasternavbarComponent } from './adminmasternavbar/adminmasternavbar.component';

import { BatchmastersComponent } from './batchmasters/batchmasters.component';

const routes: Routes = [
  // {path: '',component:AdminmasternavbarComponent},
  // {path:'master', component:AdminmasternavbarComponent},
  // {path:'CourseMaster',component:CourcemasterComponent},
  // {path:'ModuleMaster',component:ModulemasterComponent},
  // {path:'ModuleTopicMaster',component:ModuletopicmasterComponent},
  // {path:'TrainerMaster',component:TrainermasterComponent},
  // {path:'StudentMaster',component:StudentmasterComponent},
  // {path:'batchmaster',component:BatchmastersComponent},
  // {path:'batchtrainermodule', component:BatchtrainermoduleComponent}
  
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }
