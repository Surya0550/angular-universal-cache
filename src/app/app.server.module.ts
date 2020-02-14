import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule, } from '@angular/platform-server';
import { BrowserTransferStateModule, TransferState } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerStateInterceptor } from './serverstate.interceptor';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
  ],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServerStateInterceptor,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppServerModule {}
