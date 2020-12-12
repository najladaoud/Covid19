import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Medecin} from '../model/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinsService {
url = 'http://localhost:3000/listMedecins';
  constructor(private http: HttpClient) { }
  getAllmedecin(): Observable<Medecin[]>{
    return this.http.get<Medecin[]>(this.url);
  }
  deleteMedecin(id): Observable<Medecin>{
    const url = this.url + '/' + id;
    return this.http.delete<Medecin>(url);
  }
  addMedecin(med: Medecin): any{
    return this.http.post(this.url, med);
    this.getAllmedecin();
  }
  updateMedecin(id: number, med: Medecin): Observable<Medecin>{
    return this.http.put<Medecin>(this.url + '/' + id, med);
    this.getAllmedecin();
  }
  getMedecinById(id: number): Observable<Medecin> {
    return this.http.get<Medecin>(this.url + '/' + id);
  }
}
