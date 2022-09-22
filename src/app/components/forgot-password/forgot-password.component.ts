import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  isValidEmail = false;
  email:any;
  constructor() { }

  ngOnInit(): void {
  }

  canClick(){
    this.isValidEmail=true;
  }

}
