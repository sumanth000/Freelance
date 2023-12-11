import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommunicationserviceService } from './communicationservice.service';
import { PersonDatabaseService } from './person-database.service';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {


  constructor(
    private commser:CommunicationserviceService,
    private database:PersonDatabaseService
     ) {}  
  private formData = new BehaviorSubject<any>(null);

  updateFormData(data: any): void {
    this.formData.next(data);
    //notify communication service
    this.commser.PersonAdded(data);
  }

  addPerson(personDetails: any): void {
    console.log("adding here"+JSON.stringify(personDetails));

    this.database.addPerson(personDetails);
    this.notifyActionTriggered();
  }

  updatePerson(personDetails:any): void {
    this.database.updatePerson(personDetails);
    this.notifyActionTriggered();
  }

  deletePerson(personDetails: any): void {
    this.database.deletePerson(personDetails);
    this.notifyActionTriggered();
  }

  getPerson(personDetails:any):void{
    this.database.getPerson(personDetails);
    this.notifyActionTriggered();
  }

  fetchEverything(): void{
    this.database.getPeople();
    this.notifyActionTriggered();
  }

  

  private notifyActionTriggered(): void {
    console.log("action triggered");
  }


  addCourse(courseDetails: any): void {
    console.log("adding here"+JSON.stringify(courseDetails));

    this.database.addCourse(courseDetails);
    this.notifyActionTriggered();
  }
  updateCourse(personDetails:any): void {
    this.database.updateCourse(personDetails);
    this.notifyActionTriggered();
  }

  deleteCourse(course: any): void {
    this.database.deleteCourse(course);
    this.notifyActionTriggered();
  }

  getCourse(personDetails:any):void{
    this.database.getCourse(personDetails);
    this.notifyActionTriggered();
  }

  fetchEveryCourse(): void{
    this.database.getCourses();
    this.notifyActionTriggered();
  }
  
 
}
