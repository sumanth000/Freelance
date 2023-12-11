import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../Person';
import { FormsModule } from '@angular/forms';
import { PersonService} from '../person.service';
import { CommunicationserviceService } from '../communicationservice.service';
import { PersonsService } from '../persons.service';
import { Router } from '@angular/router';
import { ShowPersonsComponent } from '../show-persons/show-persons.component';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [CommonModule,FormsModule,ShowPersonsComponent],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent {

  personinformation:Person[]=[    
  ]

  
  Name='';
  Id='';
  courseName='';
  major='';
  showAddButton=false;
  showUpdateButton=false;
  showDeleteButton=false;
  showAddress=true;
  showGetButton=false;
  nocourses=false;


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
    AddPersonInformation(){
      // this.personinformation.push(new Person(this.Id,this.Name,this.Address,this.City,this.State,this.Zip));
      let array=[];
      array.push(new Person(this.Id,this.Name,this.courseName,this.major));
      
      this.Name='';
      this.courseName='';
      this.major='';
      this.Id='';    
      // this.commser.PersonAdded(this.personinformation);
    
      this.personsService.addPerson(array);
      // this.personinformation.splice(0);

      // this.personinfor.updateFormData(this.personinformation)
    }  

    UpdatePersonInformation(){
      // this.personinformation.push(new Person(this.Id,this.Name,this.Address,this.City,this.State,this.Zip));/
      let array=[];
      array.push(new Person(this.Id,this.Name,this.courseName,this.major));
      
      this.Name='';
      this.courseName='';
      this.major='';
      this.Id='';    
      // this.commser.PersonAdded(this.personinformation);
    
      this.personsService.updatePerson(array);
      // this.personinformation.splice(0);

      // this.personinfor.updateFormData(this.personinformation)

    }
    DeletePersonInformation(){
      // this.personinformation.push(new Person(this.Id,this.Name,this.courseName,this.major));
      let array=[];
      array.push(new Person(this.Id,this.Name,this.courseName,this.major));
      
      this.Name='';
      this.courseName='';
      this.major='';
      this.Id='';    
      this.personsService.deletePerson(array);
      

    }

    GetPersonInformation(){
     let array=[];
      array.push(new Person(this.Id,this.Name,this.courseName,this.major));
      
      this.Name='';
      this.courseName='';
      this.major='';
      this.Id='';    
      this.personsService.getPerson(array);

    }

    fetchEverything(){
      this.personsService.fetchEverything();
    }
    navigateToAddCourse(): void {
      this.router.navigate(['/addcourse']);
    }
    coursesData:any=[];
    dropdownCourses:any=[];

    ngOnInit(): void {
      
  
  
      this.commser.courseAdded.subscribe((data)=>{

        if(data)
        {          
          console.log("data course form"+JSON.stringify(data)); 
          this.coursesData=data;
          this.dropdownCourses=data.map((e:any)=>{return e.courseName});
  
  
        }
        else
        {
          this.nocourses=true;
        }
      })
    }  
}
