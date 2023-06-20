import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {AdministrationComponent} from './administration/administration.component';
import { PortalRoutingModule } from './portal-routing.module';
import {NzTransferModule} from 'ng-zorro-antd/transfer';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzCascaderModule} from 'ng-zorro-antd/cascader';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzStepsModule} from 'ng-zorro-antd/steps';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzTreeSelectModule} from 'ng-zorro-antd/tree-select';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzTreeModule} from 'ng-zorro-antd/tree';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzCardModule} from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzTabsModule} from 'ng-zorro-antd/tabs';


@NgModule({
  declarations: [AdministrationComponent],
  imports: [
    PortalRoutingModule, 
    CommonModule,
    NzDatePickerModule,
    NzTransferModule,
    NzDropDownModule,
    NzResultModule,
    NzCardModule,
    NzButtonModule,
    NzModalModule,
    NzDrawerModule,
    NzCascaderModule,
    NzTableModule,
    NzPaginationModule,
    NzIconModule,
    NzCheckboxModule,
    NzInputModule,
    NzDropDownModule,
    NzStepsModule,
    NzFormModule,
    NzProgressModule,
    NzInputNumberModule,
    NzCollapseModule,
    NzBadgeModule,
    NzTabsModule,
    NzRadioModule,
    NzSpinModule,
    NzUploadModule,
    NzTreeSelectModule,
    NzSelectModule,
    NzToolTipModule,
    NzBreadCrumbModule,
    NzDescriptionsModule,
    NzTreeModule,
    NzAlertModule,
    NzSwitchModule,
    NzAvatarModule,
    NzPopoverModule,
    NzPopconfirmModule,
    NzDividerModule,
    NzBadgeModule,
    NzLayoutModule,
  ],
})

export class PortalModule {
}
