import { Component } from '@angular/core';
import { menu } from '../core';
@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title = 'expertizy';
  expand = true;
  toggle(){
    this.expand = !this.expand;
  }
  lists = menu;
}
