import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalManageComponent } from './portals/portal-manage/portal-manage.component';
import { PortalAddComponent } from './portals/portal-add/portal-add.component';
import { SloganComponent } from './slogan/slogan.component';

const routes: Routes = [
  {
    path:'',
    component:PortalManageComponent
  },
  {
    path:'portal-add',
    component:PortalAddComponent
  },
  {
    path:'slogan',
    component:SloganComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
