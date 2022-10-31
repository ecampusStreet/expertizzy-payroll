import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
cardData =[
  {
    title:'History',
    icon :'calendar',
    action:'history'
  },
  {
    title:'Today Attendance',
    icon :'calendar',
    action:'swipe'
  },
  {
    title:'Manage Attendance',
    icon :'calendar',
    action:'manage'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(data:any){

  }
}
