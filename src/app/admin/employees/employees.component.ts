import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Designation = [
    {value: 'M/C Operator', viewValue: 'M/C Operator'},
    {value: 'Fitter', viewValue: 'Fitter'},
    {value: 'Welder', viewValue: 'Welder'},
    {value: 'House Keeping', viewValue: 'House Keeping'},
    {value: 'Asst.Fitter', viewValue: 'Asst.Fitter'},
    {value: 'Office Boy', viewValue: 'Office Boy'},
    {value: 'Trainee', viewValue: 'Trainee'},
    {value: 'Operator', viewValue: 'Operator'},
    {value: 'Sharing M/C Asst', viewValue: 'Sharing M/C Asst'},
    {value: 'Store Keeper', viewValue: 'Store Keeper'},
    {value: 'Grinder', viewValue: 'Grinder'},
    {value: 'Hydro Helper', viewValue: 'Hydro Helper'},
    {value: 'Trainee Welder', viewValue: 'Trainee welder'},
    {value: 'Helper', viewValue: 'Helper'},
    {value: 'Driver', viewValue: 'Driver'},
    {value: 'Electriction', viewValue: 'Electriction'},
    {value: 'Technician', viewValue: 'Technician'},
  
  ];

  

  Department =[
    {value: 'Sand Blasting', viewValue: 'Sand Blasting'},
    {value: 'HR & S4', viewValue: 'HR & S4'},
    {value: 'CR Section', viewValue: 'CR Section'},
    {value: 'Full Welding', viewValue: 'Full Welding'},
    {value: 'Hk', viewValue: 'Hk'},
    {value: 'End Plate', viewValue: 'End Plate'},
    {value: 'Accessories', viewValue: 'Accessories'},
    {value: 'Full Welding', viewValue: 'Full Welding'},
    {value: 'End Plate', viewValue: 'End Plate'},
    {value: 'Loading', viewValue: 'Loading'},
    {value: 'Office', viewValue: 'Office'},
    {value: 'Fitment', viewValue: 'Fitment'},
    {value: 'Shearing', viewValue: 'Shearing'},
    {value: 'Store', viewValue: 'Store'},
    {value: 'Grinding Section', viewValue: 'Grinding Section'},
    {value: 'Clip Cutting', viewValue: 'Clip Cutting'},
    {value: 'General', viewValue: 'General'},
    {value: 'Electrical', viewValue: 'Electrical'},
    {value: 'D & p', viewValue: 'D & p'},
    {value: 'Human Resourse', viewValue: 'Human Resourse'},
    



  ];

}
