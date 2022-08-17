import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./webapp/dashboard/dashboard.component";
import { ShoppingCartComponent } from "./webapp/shopping-cart/shopping-cart.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule { }
