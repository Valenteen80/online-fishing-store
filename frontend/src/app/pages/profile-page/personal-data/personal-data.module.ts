import { NgModule } from '@angular/core';
import { PersonalDataComponent } from './personal-data.component';
import { PersonalDataRoutingModule } from './personal-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [PersonalDataComponent],
  imports: [
    PersonalDataRoutingModule,
    SharedModule
  ]
})
export class PersonalDataModule { }
