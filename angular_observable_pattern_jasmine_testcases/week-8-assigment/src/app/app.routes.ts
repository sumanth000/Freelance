import {AddPersonComponent } from './add-person/add-person.component';
import { ShowPersonsComponent } from './show-persons/show-persons.component';
import { AddCourceComponent } from './add-cource/add-cource.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShowCourseComponent } from './show-course/show-course.component';



export const routes: Routes = [
    { 
        title: 'Add Person',
        path: 'addperson', component: AddPersonComponent
     },
  { 
    title: 'Show Persons',
    path: 'showpersons', component: ShowPersonsComponent
   },
   { 
      title: 'Add Course',
      path: 'addcourse', 
      component: AddCourceComponent
     },
     { 
      title: 'shows Course',
      path: 'showcourse', 
      component: ShowCourseComponent
     },
];
@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule {}