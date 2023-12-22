import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PortalAddComponent } from './portals/portal-add/portal-add.component';
import { PortalManageComponent } from './portals/portal-manage/portal-manage.component';
import { MaterialModule } from 'src/material/material.module';
import { ShareComponentsModule } from 'src/app/share-components/share-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PortalAddComponent,
    PortalManageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ShareComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ]
})
export class AdminModule { }
