import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommunicationserviceService } from './communicationservice.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private personinfor:CommunicationserviceService ) {}  
  private formData = new BehaviorSubject<any>(null);
  currentFormData = this.formData.asObservable();

  updateFormData(data: any): void {
    this.formData.next(data);
    //notify communication service
    this.personinfor.PersonAdded(data);
  }
 
}
