import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpSloganService } from 'src/app/https/http-slogan.service';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.scss']
})
export class Carousel1Component implements OnInit {

  slogans: any = null
  constructor(
    private $slogan: HttpSloganService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      const slogan1 = await lastValueFrom(this.$slogan.get(new HttpParams()))
      this.slogans = slogan1[0]
    } catch (error) {
      console.log("🚀 ~ error:", error)
    }
  }

}
