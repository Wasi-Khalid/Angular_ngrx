import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { DefaultComponent } from "./features/layout/default-layout/default.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: ()=> import('../app/features/features.module').then(m=> m.FeaturesModule)
      },

    ],
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
