import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PortalComponent} from './portal.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
    children: [
      {
        path: 'administration',
        component: AdministrationComponent,
        
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
})
export class PortalRoutingModule {
}
