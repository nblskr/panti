import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginComponent } from './login/login.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent{ 
  name = 'Angular'; 
  
}
