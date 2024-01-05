import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpSloganService } from 'src/app/https/http-slogan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  slogans: any = null
  slogans2: any = null

  constructor(
    private $slogan: HttpSloganService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      const slogan1 = await lastValueFrom(this.$slogan.get(new HttpParams()))
      this.slogans = slogan1[0]
      this.slogans = this.slogans.files.map((a:any)=>a.path)
      this.slogans2 = ['./assets/Kyocera_logo2j.jpg','./assets/Kyocera_logo2j.jpg']
    } catch (error) {
      console.log("🚀 ~ error:", error)
    }
  }

}
