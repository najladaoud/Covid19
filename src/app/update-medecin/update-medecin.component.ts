import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MedecinsService} from '../services/medecins.service';
import {Medecin} from '../model/medecin';
import {Gouvernorat} from '../model/gouvernorat';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {
  @Input() m: Medecin;
  constructor(private medecinService: MedecinsService, private router: Router, private activateR: ActivatedRoute) { }
  paramId: string;
  ngOnInit(): void {
    this.activateR.paramMap.subscribe(resultat => {
      this.paramId = resultat.get('id');
      this.medecinService.getMedecinById(Number(resultat.get('id'))).subscribe(resultat => this.m = resultat); });
  }
  update(){
    this.medecinService.updateMedecin(Number(this.paramId), this.m).subscribe(resultat => this.router.navigateByUrl('/Medecins'));
  }

}

