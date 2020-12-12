import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Medecin} from '../model/medecin';
import {Router} from '@angular/router';
import {MedecinsService} from '../services/medecins.service';


@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {
  addMEDForm: FormGroup;

  @Output() newlist = new EventEmitter<Medecin[]>();
  m: Medecin = new Medecin();

  constructor(private medecinService: MedecinsService, private router: Router) {
  }

  ngOnInit(): void {
    this.addMEDForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nameDoctor: new FormControl('', [Validators.required]),
      phonenumber: new FormControl('', [Validators.required]),
      namegouv: new FormControl('', [Validators.required]),
    });
  }

  addMedecin(): any {
    this.medecinService.addMedecin(this.m).subscribe(next => this.medecinService.getAllmedecin().subscribe(
      res => this.newlist.emit(res)));
    this.router.navigate(['/Medecins']);
    this.medecinService.getAllmedecin();
  }

}
