import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";
import { DefaultComponent } from "./default-layout/default.component";
import {RouterModule} from "@angular/router";
import { MaterialModule } from 'src/app/material.module';
import { CoreModule } from 'src/shared/constants/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CoreModule,
    FlexLayoutModule
  ]
})
export class LayoutModule { }
