import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // it must be imported
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //latest added module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
