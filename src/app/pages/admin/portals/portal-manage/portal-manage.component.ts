import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { HttpPortalService } from 'src/app/https/http-portal.service';

@Component({
  selector: 'app-portal-manage',
  templateUrl: './portal-manage.component.html',
  styleUrls: ['./portal-manage.component.scss']
})
export class PortalManageComponent implements OnInit {
  displayedColumns: string[] = ['no', 'name', 'url', 'corporate', 'owner', 'section', 'developer', 'logo','status'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private $portal: HttpPortalService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      const resPortal: any = await lastValueFrom(this.$portal.get(new HttpParams()))
      console.log("🚀 ~ resPortal:", resPortal)
      this.dataSource = new MatTableDataSource(resPortal.map((a: any, i: number) => {
        return {
          no: i + 1,
          name: a.name,
          url: a.url,
          corporate: a.corporate,
          owner: a.owner,
          section: a.section,
          developer: a.developer,
          logo: a.logo,
          _id:a._id,
          status:a.status
        }
      }))
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 300);
    } catch (error) {
      console.log("🚀 ~ error:", error)

    }
  }
  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleLink(data:any){
    console.log(data);
    const dataToSend = data

    // Sending data while navigating to the destination component
    this.router.navigate(['/admin/portal-add'], {
      state: { data: dataToSend },
    });
  }
  async handleChangeStatus(row:any){
    await lastValueFrom(this.$portal.createOrUpload(row))
  }
  handleNewPortal(){
    this.router.navigate(['admin/portal-add'])
  }
}
