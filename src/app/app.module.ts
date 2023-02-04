import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ProviderCardComponent } from './provider-card/provider-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProviderCardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
