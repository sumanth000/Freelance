import { Injectable } from '@angular/core';
import { Subject,Observable,BehaviorSubject, map } from 'rxjs';
import { CommunicationserviceService } from './communicationservice.service';
import { PersonService } from './person.service';
import { Person } from './Person';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class PersonDatabaseService {
    constructor(
        private communicationService: CommunicationserviceService
      ) {}
    private people: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

    private course: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);


    private peopleObjects:any=[];

    private courseObjets:any=[];

  getPeople(): Observable<string[]> {
     this.people.next(this.peopleObjects);
     this.communicationService.updatedPeople(this.peopleObjects);
    return this.people.asObservable();
  }

  


  getPerson(personDetails:any):any{
    let fetchobject:any=[];

    const personToGetIndex = this.peopleObjects.findIndex((person:any) => person.Id === personDetails[0].Id);

    if(personToGetIndex==-1)
    {
      // this.communicationService.updatedPeople(fetchobject);
        return null;
        throw new Error('Person not found to fetch');
        
  
    }
    
    for(let i=0;i<this.peopleObjects.length;i++)
    {
        if(this.peopleObjects[i].Id==personDetails[0].Id)
        {
            fetchobject.push(this.peopleObjects[i]);
            

        }
    }

    this.communicationService.updatedPeople(fetchobject);
  }

  

  addPerson(personName: any): void {

    
    const personToUpdateIndex = this.peopleObjects.findIndex((person:any) => person.Id === personName[0].Id);
    if(personToUpdateIndex!=-1)
    {
        throw new Error('Person with the same ID already exists');
  
    }
    if(personName[0].Id==null|| personName[0].Id==' ' || personName[0].Id==''
    || personName[0].Name==null|| personName[0].Name==' ' 
    || personName[0].Name=='' || personName[0].courseName==null|| personName[0].courseName==' ' || personName[0].courseName=='')
    {
        alert("Id, StudentName, courseName are mandatory");
        throw new Error('Id is mandatory')
    }
    
    this.peopleObjects.push(personName[0]);



    const updatedPeople = this.peopleObjects;
    this.people.next(updatedPeople);
     

    
    this.communicationService.updatedPeople(updatedPeople);

  }

  deletePerson(personDetails: any): void {

    const personToUpdateIndex = this.peopleObjects.findIndex((person:any) => person.Id === personDetails[0].Id);
    if(personToUpdateIndex==-1)
    {
        throw new Error('Person not found for delete');
  
    }
    for(let i=0;i<this.peopleObjects.length;i++)
    {
        if(this.peopleObjects[i].Id==personDetails[0].Id)
        {
            this.peopleObjects.splice(i,1);

        }
    }

    this.people.next(this.peopleObjects);

    this.communicationService.updatedPeople(this.peopleObjects);

  }

  updatePerson(personDetails:any): void {

    // console.log("person details to edit"+JSON.stringify(personDetails));
    const personToUpdateIndex = this.peopleObjects.findIndex((person:any) => person.Id === personDetails[0].Id);
    if(personToUpdateIndex==-1)
    {
        throw new Error('Person not found for update');
  
    }

    for(let i=0;i<this.peopleObjects.length;i++)
    {
        if(this.peopleObjects[i].Id==personDetails[0].Id)
        {
            this.peopleObjects.splice(i,1);
            this.peopleObjects.push(personDetails[0]);

        }
    }

    this.people.next(this.peopleObjects);
    this.communicationService.updatedPeople(this.peopleObjects);

  }

  // courses database

  addCourse(courseName: any): void {

    
    const personToUpdateIndex = this.courseObjets.findIndex((person:any) => person.courseId === courseName[0].courseId);
    if(personToUpdateIndex!=-1)
    {
        throw new Error('course with the same ID already exists');
  
    }
    if(courseName[0].courseId==null|| courseName[0].courseId==' ' || courseName[0].courseId==''|| courseName[0].courseName==null|| courseName[0].courseName==' ' || courseName[0].courseName=='')
    {
        alert("Id and name are mandatory");
        throw new Error('Id is mandatory')
    }
    
    this.courseObjets.push(courseName[0]);



    const updatedCourse = this.courseObjets;
    this.course.next(updatedCourse);
    

    
    this.communicationService.updatedCourse(updatedCourse);

  }

  updateCourse(courseDetails:any): void {

    console.log("course details to edit"+JSON.stringify(courseDetails));
    const personToUpdateIndex = this.courseObjets.findIndex((person:any) => person.courseId === courseDetails[0].courseId);
    console.log("personToUpdateIndex"+personToUpdateIndex);
    if(personToUpdateIndex==-1)
    {
       throw new Error('course not found for update');
    }

    for(let i=0;i<this.courseObjets.length;i++)
    {
        if(this.courseObjets[i].courseId==courseDetails[0].courseId)
        {
            this.courseObjets.splice(i,1);
            this.courseObjets.push(courseDetails[0]);

        }
    }

    this.course.next(this.courseObjets);
    console.log("after updateing"+JSON.stringify(this.courseObjets));
    this.communicationService.updatedCourse(this.courseObjets);

  }

  deleteCourse(courseDetails: any): void {

    const courseToUpdateIndex = this.courseObjets.findIndex((course:any) => course.courseId === courseDetails[0].courseId);
    if(courseToUpdateIndex==-1)
    {
        throw new Error('course not found for delete');
  
    }
    for(let i=0;i<this.courseObjets.length;i++)
    {
        if(this.courseObjets[i].courseId==courseDetails[0].courseId)
        {
            this.courseObjets.splice(i,1);

        }
    }

    this.course.next(this.courseObjets);

    this.communicationService.updatedCourse(this.courseObjets);

  }
  getCourses(): Observable<string[]> {
    this.course.next(this.courseObjets);
    this.communicationService.updatedCourse(this.courseObjets);
   return this.course.asObservable();
 }

 getCourse(courseDetails:any):any{
  let fetchobject=[];

  const personToGetIndex = this.courseObjets.findIndex((person:any) => person.Id === courseDetails[0].Id);
  if(personToGetIndex==-1)
  
  {
    
      return null;
      throw new Error('course not found to fetch');//wont be caught not as returned null as per testcases
      

  }
  
  for(let i=0;i<this.courseObjets.length;i++)
  {
      if(this.courseObjets[i].courseId==courseDetails[0].courseId)
      {
          fetchobject.push(this.courseObjets[i]);
          

      }
  }

  this.communicationService.updatedCourse(fetchobject);
}

}