import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { CustomerSettingComponent } from './customer-setting/customer-setting.component';

const routes: Routes = [{ path: '', component: CustomerSettingComponent },
{ path: 'admin', component: AdminSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
