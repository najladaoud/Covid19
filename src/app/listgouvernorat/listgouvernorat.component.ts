import { Component, OnInit } from '@angular/core';
import {Gouvernorat} from '../model/gouvernorat';
import {GouvernoratService} from '../services/gouvernorat.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listgouvernorat',
  templateUrl: './listgouvernorat.component.html',
  styleUrls: ['./listgouvernorat.component.css']
})
export class ListgouvernoratComponent implements OnInit {
  constructor(private gouvservice: GouvernoratService ,  private router: Router) { }
  nameg: string;
  listGouvernorat: Gouvernorat[];
  gouv: Gouvernorat;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  ngOnInit(): void {
  this.gouvservice.getAllgouv().subscribe(
    (data: Gouvernorat[]) => this.listGouvernorat = data);
  this.gouv = new Gouvernorat();

  }
  delete(id): void{
    this.gouvservice.deleteGouv(id) .subscribe(
      () => this.listGouvernorat = this.listGouvernorat.filter(gouv => gouv.id !== id),
    );
  }
 Search(){
    if (this.nameg != ''){
      this.listGouvernorat = this.listGouvernorat.filter(res => {
        return res.name.toLocaleLowerCase().match(this.nameg.toLocaleLowerCase());
      });
    }
      else {
        this.ngOnInit();
      }
    }
    onAjouterclick() {
    this.router.navigate(['/AddGouv']);
  }
}





