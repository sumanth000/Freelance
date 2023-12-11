import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Person } from './Person';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { ShowPersonsComponent } from './show-persons/show-persons.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,RouterLink, RouterLinkActive,ShowPersonsComponent,AddPersonComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Js';  
  constructor(private router:Router){};


  navigateToAddCourse(): void {
    this.router.navigate(['/addcourse']);
  }
  navigateToAddStudent():void{
    this.router.navigate(['/addperson']);

  }
}
