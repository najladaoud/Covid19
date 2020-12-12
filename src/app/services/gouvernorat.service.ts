import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gouvernorat} from '../model/gouvernorat';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GouvernoratService {
url = 'http://localhost:3000/listGouvernorat';

  constructor(private http: HttpClient) { }

  getAllgouv(): Observable<Gouvernorat[]>{
    return this.http.get<Gouvernorat[]>('http://localhost:3000/listGouvernorat');
  }

  addGouv(Gouv1: Gouvernorat): any{
    return this.http.post(this.url, Gouv1);
  }
  deleteGouv(id): Observable<Gouvernorat> {
    const url = this.url + '/' + id;
    return this.http.delete<Gouvernorat>(url);
  }
   updateGouv(id: number, GOUV: Gouvernorat): Observable<Gouvernorat>{
     return this.http.put<Gouvernorat>(this.url + '/' + id, GOUV);
     this.getAllgouv();
  }
  getGouvById(id: number): Observable<Gouvernorat> {
    return this.http.get<Gouvernorat>(this.url + '/' + id);
  }
}

