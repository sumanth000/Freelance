import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Person } from '../Person';
import { PersonService } from '../person.service';
import { PersonsService } from '../persons.service';
import { CommunicationserviceService } from '../communicationservice.service';
import { FormsModule } from '@angular/forms';
import { ShowCourseComponent } from '../show-course/show-course.component';
import { Course } from '../Person copy';

@Component({
  selector: 'app-add-cource',
  standalone: true,
  imports: [CommonModule,FormsModule,ShowCourseComponent],
  templateUrl: './add-cource.component.html',
  styleUrl: './add-cource.component.css'
})
export class AddCourceComponent {


  courseinformation:Course[]=[    
  ]
  
  courseName='';
  courseId='';
  
  showAddButton=false;
  showUpdateButton=false;
  showDeleteButton=false;
  showAddress=true;
  showGetButton=false;


  deleteOptionSelected=false;
  getOptionSelected=false;
 
  addOptionToggle(){
    this.showAddButton=true;

    this.showUpdateButton=false;
    this.showDeleteButton=false;
    this.showGetButton=false;

    this.deleteOptionSelected=false;


  }
  updateOptionToggle(){
    this.showUpdateButton=true;

    this.showAddButton=false;
    this.showDeleteButton=false;
    this.showGetButton=false;
    
    this.deleteOptionSelected=false;


  }

  deleteOptionToggle(){
    this.showDeleteButton=true;

    this.showUpdateButton=false;
    this.showAddButton=false;
    this.showGetButton=false;
    

    this.deleteOptionSelected=true;
    

  }

  getOptionToggle(){
    this.showGetButton=true;

    this.showDeleteButton=false;
    this.showUpdateButton=false;
    this.showAddButton=false;

    this.deleteOptionSelected=true;//or for get option as well

  }

  constructor(private router:Router,private personinfor: PersonService,private commser:CommunicationserviceService,private personsService:PersonsService){

  }  
    AddCourseInformation(){
      this.courseinformation.push(new Course(this.courseId,this.courseName));
      let array=[];
      array.push(new Course(this.courseId,this.courseName));
     
      this.courseName='';
    
      this.courseId='';
    
      this.personsService.addCourse(array);
    
    }  

    UpdateCourseInformation(){
      this.courseinformation.push(new Course(this.courseId,this.courseName));
      let array=[];
      array.push(new Course(this.courseId,this.courseName));
      
      this.courseName='';
     
      this.courseId='';
    
      this.personsService.updateCourse(array);


    }
    DeleteCourseInformation(){
      // this.personinformation.push(new Person(this.Id,this.Name,this.Address,this.City,this.State,this.Zip));
      let array=[];
     array.push(new Course(this.courseId,this.courseName));
     
      this.courseName='';
    
      this.courseId=''; 
      this.personsService.deleteCourse(array);
      

    }

    GetCourseInformation(){
     let array=[];
     array.push(new Course(this.courseId,this.courseName));
     
     this.courseName='';
   
     this.courseId='';
      this.personsService.getCourse(array);

    }

    fetchEverything(){
      this.personsService.fetchEverything();
    }

    fetchEveryCourse(){
      this.personsService.fetchEveryCourse();

    }


    
   

}
