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
        return {
          corporate: a,
          data: resPortal.filter((b: any) => b.corporate == a)
        }
      })
      console.log("🚀 ~ this.portals:", this.portals)
      console.log("🚀 ~ unique:", unique)
    } catch (error) {
      console.log("🚀 ~ error:", error)
    }
  }

  handleLink(url:string){
    window.open(url, '_blank');
  }

}
