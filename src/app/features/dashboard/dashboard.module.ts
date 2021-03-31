import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeView } from './views/home/home.view';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardCommonsModule } from './commons/commons.module';


@NgModule({
  declarations: [DashboardComponent, HomeView],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardCommonsModule,
    SharedComponentsModule
  ]
})
export class DashboardModule { }
