import { Component } from '@angular/core';
import { Api } from '../../../services/api';
import { NgFor } from '@angular/common';
// import { DatePipe } from "../../../pipes/date-pipe";
import { DatePipe } from '@angular/common'; 
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-events',
  imports: [NgFor, DatePipe],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events {
  events:any[] =[];
  constructor(private apiServicesProvider:Api){}


  ngOnInit(){
    this.apiServicesProvider.getEvents().subscribe((res:any)=>{
      if(res.success){
        this.events = res.events

      }
    })
  }
}
