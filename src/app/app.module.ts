import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClassificheComponent } from './classifiche/classifiche.component';
import { CategorieComponent } from './categorie/categorie.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { InserisciTempoComponent } from './inserisci-tempo/inserisci-tempo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassificheComponent,
    CategorieComponent,
    UserDashboardComponent,
    InserisciTempoComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
