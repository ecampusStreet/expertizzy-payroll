import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';
import{ Location} from '@angular/common'
import * as moment from 'moment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  eventList: any=[];
  viewData:any = [];
showCalender:boolean=false;
today = moment(new Date()).format('YYYY-MM-DD');
  todayEvent: any;

  constructor(
    private router: Router,
    private utilsService: UtilsService,
    private apiService: ApiService,
    private toastService: ToastService,
  ) { }
  event:any=[];

  ngOnInit(): void {
    this.getEvents();
    console.log(this.calendarOptions.events,'this.event')

  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin,interactionPlugin],
    dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    events : this.event,
   
    weekends: false 
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends;
  }

  add(){
    this.router.navigate(['expertizzy/event/add']);
  }
  getEvents(){
    const config = {
      url:urls.event.list
    }
    this.apiService.get(config).subscribe((resp)=>{
      if(resp.success){
        this.toastService.success(resp.message);

       if(this.eventList = resp.result.data){
        this.eventList.forEach((element:any) => {
          let data ={
            title:element.eventTitle,
            date: moment(element.fromDate).format('YYYY-MM-DD')
          }
        this.event.push(data);
        this.showCalender=false;
        });
      
        // this.calendarOptions.events = this.event;
        this.showCalender=true;
       }  
        let event = this.eventList.filter((resp:any)=> moment(resp.fromDate).format('YYYY-MM-DD') == this.today);
      this.viewData = event;
      }
    })
  }

  action(data:any, action:any){
    switch (action) {
      case 'edit':
        this.router.navigate(['expertizzy/event/add'], {
          queryParams: { id: data._id },
        });
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break; 
    }
  }

  deleteConfirmationpopup(event:any){
    let data = {
      header: '',
      message: 'Are you sure, you want to delete this event?',
    };
    this.utilsService.openDialog(data).then((resp) => {
      if (resp) {
        this.delete(event);
      }
    });
  }
  
  delete(event:any){
  const config ={
    url:urls.event.delete + event._id,
  }
  this.apiService.delete(config).subscribe((resp) => {
        if (resp.success) {
          this.toastService.success(resp.message);
          this.eventList = '';
          this.getEvents();
        }
      });
  }

  handleDateClick(arg:any){
let data = this.eventList.filter( (resp:any) => moment(resp.fromDate).format('YYYY-MM-DD') == arg.dateStr);
console.log(data,"datadata");
this.viewData = data;
  }


}
