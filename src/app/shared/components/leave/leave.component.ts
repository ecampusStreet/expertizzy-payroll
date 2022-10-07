import { Component, OnInit } from '@angular/core';
import { leaves } from 'src/app/core/constants/data';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
leaves = leaves;
  constructor() { }

  ngOnInit(): void {
  }


}
