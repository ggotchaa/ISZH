import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {AdministrationComponent} from './administration/administration.component';
import { PortalRoutingModule } from './portal-routing.module';

@NgModule({
  declarations: [AdministrationComponent],
  imports: [PortalRoutingModule, CommonModule,],
})

export class PortalModule {
}