import { Component, OnInit } from '@angular/core';


//added11 ysk 
import { EventService } from '../../services/event.service'
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-allschedules',
  templateUrl: './allschedules.component.html',
  styleUrls: ['./allschedules.component.css']
})
export class AllschedulesComponent implements OnInit {
  events: any[];
  resources: any[];
  headerConfig: any;
  resourceCol: any[];

//added11 ysk below cons

  constructor(public eventService:EventService) { 

    console.log('all schedule running...');

  }

  ngOnInit() {
    console.log('ngonit running...');

    this.eventService.getPost().subscribe((posts) => {
    
    console.log(posts);

    });

  }


}

