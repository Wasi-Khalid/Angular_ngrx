import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from "./features/features.module";
import { BaseModule } from "./base/base.module";
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import reducers from './store/ActionReducerMap.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { MainEffects } from './store/effects/main.effect';
import { CoreModule } from 'src/shared/constants/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeaturesModule,
    BaseModule,
    MaterialModule,
    StoreDevtoolsModule,
    EffectsModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([MainEffects])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
