import { TestBed } from '@angular/core/testing';
import { PersonDatabaseService } from './person-database.service';
import { CommunicationserviceService } from './communicationservice.service';

describe('PersonDatabaseService', () => {
  let personDatabaseService: PersonDatabaseService;
  let communicationServiceSpy: jasmine.SpyObj<CommunicationserviceService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CommunicationserviceService', ['updatedPeople']);

    TestBed.configureTestingModule({
      providers: [
        PersonDatabaseService,
        { provide: CommunicationserviceService, useValue: spy },
      ],
    });

    personDatabaseService = TestBed.inject(PersonDatabaseService);
    communicationServiceSpy = TestBed.inject(CommunicationserviceService) as jasmine.SpyObj<CommunicationserviceService>;
  });

  it('UPDATE :SUCCESS, should update a person successfully', () => {
    const initialPeopleObjects = [{ Id: '1', Name: 'Siri' }];
    personDatabaseService['peopleObjects'] = initialPeopleObjects;

    const updatedPersonDetails = [{ Id: '1', Name: 'Updated Siri' }];


    personDatabaseService.updatePerson(updatedPersonDetails);

    expect(personDatabaseService['peopleObjects']).toEqual(updatedPersonDetails);
    expect(communicationServiceSpy.updatedPeople).toHaveBeenCalledWith(updatedPersonDetails);
  });

 

  it('UPDATE :FAILURE, should throw an error if person to update is not found', () => {
    const initialPeopleObjects = [{ Id: '1', Name: 'Siri' }];
    personDatabaseService['peopleObjects'] = initialPeopleObjects;

    const updatedPersonDetails = [{ Id: '2', Name: 'Updated vannela' }];

    expect(() => {
      personDatabaseService.updatePerson(updatedPersonDetails);
    }).toThrowError('Person not found for update');

    expect(communicationServiceSpy.updatedPeople).not.toHaveBeenCalled();
  });

  it('ADD: SUCCESS,should add a person successfully', () => {
    const initialPeopleObjects = [{ Id: '1', Name: 'Siri',courseName:'Math' }];
    personDatabaseService['peopleObjects'] = initialPeopleObjects;

    const newPersonDetails = [{ Id: '2', Name: 'vannela' ,courseName:'Math' }];

    personDatabaseService.addPerson(newPersonDetails);


    const updatedPeople = personDatabaseService['peopleObjects'];
    expect(updatedPeople).toEqual([...initialPeopleObjects]);

    expect(communicationServiceSpy.updatedPeople).toHaveBeenCalledWith(updatedPeople);
  });

  it('ADD: FAILURE,should not add a person with an existing ID', () => {
    const initialPeopleObjects = [{ Id: '1', Name: 'Siri' }];
    personDatabaseService['peopleObjects'] = initialPeopleObjects;

    const newPersonDetails = [{ Id: '1', Name: 'Updated Siri' }];

    expect(() => {
      personDatabaseService.addPerson(newPersonDetails);
    }).toThrowError('Person with the same ID already exists');

    expect(communicationServiceSpy.updatedPeople).not.toHaveBeenCalled();
  });


  it(' DELETE: SUCCESS, should delete a person successfully', () => {
    const initialPeopleObjects = [{ Id: '1', Name: 'Siri' }, { Id: '2', Name: 'vannela' }];
    personDatabaseService['peopleObjects'] = initialPeopleObjects;

    const personToDelete = [{ Id: '1', Name: 'Siri' }];

    personDatabaseService.deletePerson(personToDelete);

    const updatedPeople = personDatabaseService['peopleObjects'];

    console.log("updated after delteing people"+JSON.stringify(updatedPeople));
    expect(updatedPeople).toEqual([{ Id: '2', Name: 'vannela' }]);

    expect(communicationServiceSpy.updatedPeople).toHaveBeenCalledWith(updatedPeople);
  });

  it('DELETE : FAILURE,should throw an error if person to delete is not found', () => {
    const initialPeopleObjects = [{ Id: '1', Name: 'Siri' }];
    personDatabaseService['peopleObjects'] = initialPeopleObjects;

    const personNameToDelete =[{ Id: '2', Name: 'Siri' }];

    expect(() => {
      personDatabaseService.deletePerson(personNameToDelete);
    }).toThrowError('Person not found for delete');

    expect(communicationServiceSpy.updatedPeople).not.toHaveBeenCalled();
  });


  it('GET: SUCCESS1 , should emit initial people array', (done) => {
    const initialPeopleObjects = [{ Id: '1', Name: 'John Doe' }, { Id: '2', Name: 'Jane Doe' }];
    personDatabaseService['peopleObjects'] = initialPeopleObjects;

    personDatabaseService.getPeople().subscribe((people:any) => {
      expect(people).toEqual(initialPeopleObjects);
      done();
    });
  });

  it('GET: SUCCESS2,should emit updated people array after adding a person', (done) => {
    const initialPeopleObjects = [{ Id: '1', Name: 'John Doe',courseName:'math' }];
    personDatabaseService['peopleObjects'] = initialPeopleObjects;

    const newPersonDetails = [{ Id: '2', Name: 'Jane Doe',courseName:'math'  }];

    personDatabaseService.addPerson(newPersonDetails);

    personDatabaseService.getPeople().subscribe((people:any) => {
      expect(people).toEqual([...initialPeopleObjects]);
      done();
    });
  });


  it('GET : FAILURE,should be null when searched for null value', () => {
    const initialPeopleObjects = [{ Id: '1', Name: 'Siri',courseName:'Math' }];
    personDatabaseService['peopleObjects'] = initialPeopleObjects;

    const personToSearch = [{ Id: '2', Name: 'Siri' ,courseName:'Math'}];

   

    expect(personDatabaseService.getPerson(personToSearch)).toBeNull();
    expect(communicationServiceSpy.updatedPeople).not.toHaveBeenCalled();
  });

  

  



});