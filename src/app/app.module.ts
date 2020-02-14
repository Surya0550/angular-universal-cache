import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
//import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { FastComponent } from './fast/fast.component';
import { SlowComponent } from './slow/slow.component';
import { BrowserStateInterceptor } from './browserstate.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FastComponent,
    SlowComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    //TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BrowserStateInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
