import { Component } from '@angular/core';
import { CommunicationserviceService } from '../communicationservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-course.component.html',
  styleUrl: './show-course.component.css'
})
export class ShowCourseComponent {
  receivedFormData: any=[]; 
  storingData:any=[];
  constructor(private personinfor: CommunicationserviceService){

  }  

  getAllData(){
    this.personinfor.courseAdded.subscribe((data) => {
      if(data)
      {
           // let dataArray=[];
           // dataArray=data;
           // console.log("received form"+JSON.stringify(this.receivedFormData)); 
           console.log("data form"+JSON.stringify(data)); 
           // this.receivedFormData = dataArray.filter((e:any)=>{
           //   let boolean=false;
           //   if(this.receivedFormData)
           //   {
           //   this.receivedFormData.forEach((ele:any) => {
           //     if(ele.Id!=e.Id)boolean=true;
           //   });
           //   }
           //     else boolean=true;
           //       return boolean;
           // });   
           // this.receivedFormData='';
 
           // this.storingData.push(data);
           this.receivedFormData=data;
 
 
           // this.receivedFormData=data;
       
     }
 
     });

  }
  
  ngOnInit(): void {
    // Subscribe to changes in the form data
    this.personinfor.courseAdded.subscribe((data) => {
     if(data)
     {
          // let dataArray=[];
          // dataArray=data;
          // console.log("received form"+JSON.stringify(this.receivedFormData)); 
          console.log("data form"+JSON.stringify(data)); 
          // this.receivedFormData = dataArray.filter((e:any)=>{
          //   let boolean=false;
          //   if(this.receivedFormData)
          //   {
          //   this.receivedFormData.forEach((ele:any) => {
          //     if(ele.Id!=e.Id)boolean=true;
          //   });
          //   }
          //     else boolean=true;
          //       return boolean;
          // });   
          // this.receivedFormData='';

          // this.storingData.push(data);
          this.receivedFormData=data;


          // this.receivedFormData=data;
      
    }

    });
  }   

}
