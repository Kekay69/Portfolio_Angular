import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { AboutComponent } from './about/about.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ConnectComponent } from './connect/connect.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyservicesComponent,
    AboutComponent,
    MyworkComponent,
    ConnectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
