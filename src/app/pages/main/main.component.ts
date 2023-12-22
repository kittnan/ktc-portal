import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // Swal.fire({
    //   title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis doloremque delectus vel ipsam quidem ipsa officia laborum nulla, consequatur corporis placeat voluptatem repellat iusto iure eaque animi iste consectetur?",
    //   allowEnterKey:false,
    //   allowEscapeKey:false,
    //   allowOutsideClick:false,
    //   confirmButtonText:'Accept'
    // })
  }

}
