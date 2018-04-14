import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home.component';
import { homeRoutes, HomeRoutesModule } from './home.routes';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutesModule
  ],
  providers: [ ]
})
export class HomeModule { }
