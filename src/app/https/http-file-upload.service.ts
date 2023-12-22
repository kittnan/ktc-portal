import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpFileUploadService {

  private URL = environment.API;
  private FILE_SERVER = environment.fileServer;
  constructor(private http: HttpClient) { }
  upload(data:any): Observable<any> {
    return this.http.post(`${this.FILE_SERVER}`,data);
  }
}
