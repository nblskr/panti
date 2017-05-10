import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DonasiComponent } from './donasi/donasi.component';
import { RelawanComponent } from './relawan/relawan.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DonasiComponent,
    RelawanComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
      path:'home', 
      component:HomeComponent
    },
    { 
      path:'donasi', 
      component:DonasiComponent
    },
    { 
      path:'relawan', 
      component:RelawanComponent
    },
    

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
