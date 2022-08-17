import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from "./layout/layout.module";
import { DashboardComponent } from "./webapp/dashboard/dashboard.component";
import { ShoppingCartComponent } from "./webapp/shopping-cart/shopping-cart.component";
import { FeatureRoutingModule } from "./feature-routing.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from '../material.module';
import { CoreModule } from 'src/shared/constants/core.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FeatureRoutingModule,
    StoreDevtoolsModule,
    MaterialModule,
    CoreModule
  ]
})
export class FeaturesModule { }
