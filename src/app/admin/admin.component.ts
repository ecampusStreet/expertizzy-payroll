import { Component, ViewChild } from '@angular/core';
import { adminMenu,menu } from '../core';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';

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
