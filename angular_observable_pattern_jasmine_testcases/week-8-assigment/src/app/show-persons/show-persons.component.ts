import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationserviceService } from '../communicationservice.service';
import { Course } from '../Person copy';

@Component({
  selector: 'app-show-persons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-persons.component.html',
  styleUrl: './show-persons.component.css'
})

export class ShowPersonsComponent {
  
  constructor(private personinfor: CommunicationserviceService){

  }  
  receivedFormData: any=[]; 
  storingData:any=[];

  coursesData:any=[];

  getAllData(){
    this.personinfor.personAdded.subscribe((data) => {
      if(data)
      {
          
           console.log("data form"+JSON.stringify(data)); 
           
           this.receivedFormData=data;
 
 
       
     }
 
     });

  }

  
  
  ngOnInit(): void {
    // Subscribe to changes in the form data
    this.personinfor.personAdded.subscribe((data) => {
     if(data)
     {
          
          console.log("data perons form"+JSON.stringify(data)); 
         
          this.receivedFormData=data;
      
    }

    });


    this.personinfor.courseAdded.subscribe((data)=>{
      if(data)
      {          
        console.log("data course form"+JSON.stringify(data)); 
        this.coursesData=data;


      }
    })
  }    
}