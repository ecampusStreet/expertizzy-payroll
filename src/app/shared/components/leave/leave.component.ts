import { Component, OnInit } from '@angular/core';
import { leaves } from 'src/app/core/constants/data';

@Component({
  selector: 'leave-balance',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
leaves = leaves;
  constructor() { }

  ngOnInit(): void {
  }


}
