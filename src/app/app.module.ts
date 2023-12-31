import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule,
} from 'ngx-ui-loader';
import { MainComponent } from './pages/main/main.component';
import { PortalComponent } from './pages/main/portal/portal.component';
import { MenuComponent } from './pages/main/menu/menu.component';
import { Carousel1Component } from './pages/main/carousel1/carousel1.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#673ab7',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'square-loader',
  blur: 15,
  delay: 0,
  fastFadeOut: true,
  fgsColor: 'rgb(255, 87, 87,0)',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'ball-scale-multiple',
  gap: 5,
  logoPosition: 'center-center',
  logoSize: 200,
  logoUrl: './assets/load4.gif',
  // logoUrl: './assets/portalLOGO.png',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(255,255,255,0.7)',
  pbColor: '#000000',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime:1000

};


@NgModule({
  declarations: [AppComponent, MainComponent, PortalComponent, MenuComponent, Carousel1Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
