import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormControl,FormGroup} from '@angular/forms';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DonasiComponent } from './donasi/donasi.component';
import { RelawanComponent } from './relawan/relawan.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PantiListComponent } from './panti-list/panti-list.component';
import { PantiDetailComponent } from './panti-detail/panti-detail.component';
import { DonasiListComponent } from './donasi-list/donasi-list.component';
import { RelawanListComponent } from './relawan-list/relawan-list.component';
import { RelawanDetailComponent } from './relawan-detail/relawan-detail.component';
import { DonasiDetailComponent } from './donasi-detail/donasi-detail.component';
import { RegispantiComponent } from './regispanti/regispanti.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DonasiComponent,
    RelawanComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PantiListComponent,
    PantiDetailComponent,
    DonasiListComponent,
    RelawanListComponent,
    RelawanDetailComponent,
    DonasiDetailComponent,
    RegispantiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
