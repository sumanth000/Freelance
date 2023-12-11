import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddCourceComponent } from './add-cource/add-cource.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommunicationserviceService } from './communicationservice.service';

@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule 
 ],
 providers: [CommunicationserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}