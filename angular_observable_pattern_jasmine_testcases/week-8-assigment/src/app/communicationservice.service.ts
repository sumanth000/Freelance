import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject } from 'rxjs'
import {  PersonDatabaseService} from './person-database.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationserviceService {
  constructor(
    //  private database:PersonDatabaseService
     ) {} 

     

      private personAddedSubject = new BehaviorSubject<any>(null);
      personAdded = this.personAddedSubject.asObservable();//can be subscribed for information

      private courseAddedSubject = new BehaviorSubject<any>(null);
      courseAdded = this.courseAddedSubject.asObservable();//can be subscribed for information
    
      PersonAdded(data: any): void {
        this.personAddedSubject.next(data);
        // this.database.addPerson(data);

      }

    

      updatedPeople(data:any):void{
        console.log("updated student at comm"+JSON.stringify(data));
        this.personAddedSubject.next(data);
      }

      updatedCourse(data:any):void{
        console.log("updated course at comm"+JSON.stringify(data));
        this.courseAddedSubject.next(data);
      }

      
}
