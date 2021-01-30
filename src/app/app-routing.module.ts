import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { HomeComponent } from './home/home.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { MyworkComponent } from './mywork/mywork.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: MyservicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'my work', component: MyworkComponent },
  { path: 'connect', component: ConnectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
