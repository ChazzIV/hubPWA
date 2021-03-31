import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortadaComponent } from './portada/portada.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';

const COMPONENTS = [
  PortadaComponent, EnlacesComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedComponentsModule
  ]
})
export class DashboardComponentsModule { }
