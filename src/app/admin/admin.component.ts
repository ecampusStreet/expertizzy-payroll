import { Component, OnInit } from '@angular/core';
import { ApiService, CurrentUserService, menu, urls, UtilsService } from '../core';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  implements OnInit{
  title = 'expertizy';
  expand = true;
  permissions =[];
  toggle(){
    this.expand = !this.expand;
  }
  constructor(private api:ApiService,
    private userService : CurrentUserService,
    private utilService :UtilsService){
  }

  lists:any = menu;
  ngOnInit(): void {
    this.userService.getUser().then((resp:any) =>{
      this.getPermisions(resp.employee.role);
    })
     
  }
  async getPermisions(id : any){
    const config ={
      url: urls.roles.getId+id
    }
    this.api.get(config).subscribe(async resp =>{
      console.log(resp,"resp");
      if(resp.success){
        this.permissions = resp.data;
      this.lists =  await this.utilService.checkPermissions(this.permissions);
      } 
    })
  }
}
