import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpPortalService } from 'src/app/https/http-portal.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  portals: any = null
  constructor(
    private $portal: HttpPortalService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      const resPortal = await lastValueFrom(this.$portal.get(new HttpParams().set('status',true)))
      const unique = [...new Set(resPortal.map((item: any) => item.corporate))]; // [ 'A', 'B']
      this.portals = unique.map((a: any) => {
        const newData = resPortal.filter((b: any) => b.corporate == a).sort((a1:any,a2:any)=>{
          const nameA = a1.name.toLowerCase();
          const nameB = a2.name.toLowerCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return false
        })
        return {
          corporate: a,
          data: newData
        }
      })
    } catch (error) {
      console.log("🚀 ~ error:", error)
    }
  }

  handleLink(url:string){
    window.open(url, '_blank');
  }
  htmlName(name:string){
    if(name.length>18){
      return name.slice(0, 18) +'..'
    }
    return name
  }

  handleRightClick(e:any){
    console.log(e);

  }

}
