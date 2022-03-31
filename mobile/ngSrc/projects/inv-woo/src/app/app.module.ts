import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LookupServiceService } from 'projects/services/src/lib/lookup-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LookupServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
