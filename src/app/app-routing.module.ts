import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { MainComponent } from './pages/main/main.component';
import { AdminModule } from './pages/admin/admin.module';

const routes: Routes = [
  {
    path: '',
    component:MainComponent
  },
  {
    path: 'admin',
    loadChildren: () => AdminModule,
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
