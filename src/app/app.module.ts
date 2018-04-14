import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AuthentificationService } from './shared/authentification.service';
import { AppRoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './shared/components/header/header.component';
import { AppMainComponent } from './shared/components/main/main.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HomeModule
  ],
  providers: [
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
