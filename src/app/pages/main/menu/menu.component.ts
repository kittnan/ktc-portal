import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: any = null
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    try {
        this.menu = [
          {
            name:'Admin',
            logo:'./assets/icons/hacker.png',
            url:'admin'
          }
        ]
    } catch (error) {
      console.log("🚀 ~ error:", error)

    }
  }
  handleLink(url: string) {
    // window.open(url, '_blank');
    this.router.navigate([url])
  }


}
