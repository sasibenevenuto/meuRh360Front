import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-welcome-company',
  standalone: true,
  imports: [MatGridListModule,MatCardModule,RouterLink,MatButtonModule,MatMenuModule],
  templateUrl: './welcome-company.component.html',
  styleUrl: './welcome-company.component.css'
})
export class WelcomeCompanyComponent {

}
