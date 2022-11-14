import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, urls } from 'src/app/core';

@Component({
  selector: 'app-emp-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  panelOpenState = false;

  emp: any;
  emplID:any;

 employee:any;

  constructor(private activateRoute:ActivatedRoute,
    private apiService: ApiService) { 
    activateRoute.params.subscribe((params :any) =>{
      this.emplID = params.id;
      this.getData();
    })
  }

  ngOnInit(): void {}

  getData(){
    const config={
      url: urls.employee.byId + this.emplID
    }
    this.apiService.get(config).subscribe(data =>{
      console.log(data,'view data')
      if(data.success){
        this.employee = data.result;
        console.log(this.employee)
      }
    })
  }
}
