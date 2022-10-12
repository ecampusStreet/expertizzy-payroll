import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

    
    constructor(private toast : ToastService,) { }

  ngOnInit(): void {
    this.toast.error("Events ui is not implemented yet",)
  }

}
