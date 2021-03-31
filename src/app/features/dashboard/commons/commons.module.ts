import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  exports: [DashboardComponentsModule],
  imports: [
    CommonModule
  ]
})
export class DashboardCommonsModule { }
