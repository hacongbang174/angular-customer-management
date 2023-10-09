import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TopBarComponent } from './components/layout/top-bar/top-bar.component';
import { LeftBarComponent } from './components/layout/left-bar/left-bar.component';
import { CustomersComponent } from './components/customers/customers.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftBarComponent,
    CustomersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
