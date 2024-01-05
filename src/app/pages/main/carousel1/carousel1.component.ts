import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.scss']
})
export class Carousel1Component implements OnInit {

  @Input() items:any
  // @Input() id:any
  constructor(
  ) { }

  async ngOnInit(): Promise<void> {
    try {
    } catch (error) {
      console.log("🚀 ~ error:", error)
    }
  }

}
