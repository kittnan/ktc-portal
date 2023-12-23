import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpSloganService {

  private URL = environment.API;
  constructor(private http: HttpClient) {}

  get(p:HttpParams): Observable<any> {
    return this.http.get(`${this.URL}/slogan`,{
      params:p
    });
  }
  createOrUpload(data: any): Observable<any> {
    return this.http.post(`${this.URL}/slogan/createOrUpload`, data);
  }
}
