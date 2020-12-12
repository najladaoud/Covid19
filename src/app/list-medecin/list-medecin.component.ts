import { Component, OnInit } from '@angular/core';
import {Medecin} from '../model/medecin';
import {MedecinsService} from '../services/medecins.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.css']
})
export class ListMedecinComponent implements OnInit {
  listMed: Medecin[];
  medecin: Medecin;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private medecinService: MedecinsService, private router: Router) {
  }

  ngOnInit(): void {
    this.medecinService.getAllmedecin().subscribe(
      (data: Medecin[]) => this.listMed = data);
    this.medecin = new Medecin();
  }

delete(id): void{
  this.medecinService.deleteMedecin(id) .subscribe(
    () => this.listMed = this.listMed.filter(medecin => medecin.id !== id),
  );
}

  onAjouterclick(): void {
    this.router.navigate(['/Addmedecin']);
  }
}
