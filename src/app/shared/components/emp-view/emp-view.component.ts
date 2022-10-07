import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.scss']
})
export class EmpViewComponent implements OnInit {

  panelOpenState = false;

  emp: any;
  emplID:any;

 employee =[
 {
  label:"Personal details",
  "profilePic":"",
  "fullName": "radha",
  "fatherName": "vrishabhanu",
  "dob":"07/08/1996" ,
  "ph_no":"8880496141",
  "email":"radha@gmail.com",
  "marital_status":"krishna",
  "gender":"female",
  "bloodGroup":"b+",
  "aadhara_no":"845745689632",
  "address":"ho-20 basaveshwar nagar yadgir",
  "desg":"Developer",
 },
 {
  label:"Qualification details",
  "profilePic":"",
  "fullName": "radha",
  "fatherName": "vrishabhanu",
  "dob":"07/08/1996" ,
  "ph_no":"8880496141",
  "email":"radha@gmail.com",
  "marital_status":"krishna",
  "gender":"female",
  "bloodGroup":"b+",
  "aadhara_no":"845745689632",
  "address":"ho-20 basaveshwar nagar yadgir",
  "desg":"Developer",
 },
 {
  label:"experienceDetails",
  "companyName":"webspruce",
       "yearOfExp":2,
       "designation":"developer"
 }

 ]


//  "experienceDetails":{
//        "companyName":"webspruce",
//        "yearOfExp":2,
//        "designation":"developer"
//      },
//      "departmentDetails":{
//          "dept_name":"software",
//          "designation":"developer",
//          "team":"technical",
//          "teamLeader":"vishwanath",
//          "doj":"25 aug 2022"
//      },
//      "accountDetails":{
//          "acc_number":123456,
//          "branch":"yadgir",
//          "ifscCode":"SBMY0040823",
//          "uan_no":654321,
//          "panCard":"BHMPV6870R"
//      },
//      "emergencyDetails":{
//          "name":"krishna",
//          "relation_with":"husband",
//          "age":35,
//          "address":"ho-20 basaveshwar nagar yadgir",
//          "contact_no":9845948777
//      }







  

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.snapshot.paramMap
  }

}
