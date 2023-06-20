import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PortalModule } from './portal/portal.module';
import { PortalRoutingModule } from './portal/portal-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule} from 'ng-zorro-antd/grid';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzCardModule } from 'ng-zorro-antd/card';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    PortalModule, 
    PortalRoutingModule,
    CommonModule,
    NzLayoutModule, 
    NzTabsModule, 
    NzGridModule,
    NzCardModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AppModule { }
