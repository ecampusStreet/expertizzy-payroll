import { Component } from '@angular/core';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  // title = 'expertizy';

  expand = true;
  toggle(){
    this.expand = !this.expand;
  }
  constructor() {}
}