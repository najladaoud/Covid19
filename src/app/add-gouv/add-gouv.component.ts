import {Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GouvernoratService} from '../services/gouvernorat.service';
import {Router} from '@angular/router';
import {Gouvernorat} from '../model/gouvernorat';

@Component({
  selector: 'app-add-gouv',
  templateUrl: './add-gouv.component.html',
  styleUrls: ['./add-gouv.component.css']
})
export class AddGouvComponent implements OnInit {
addForm: FormGroup;
g: Gouvernorat = new Gouvernorat() ;
  @Output() newlist = new EventEmitter<Gouvernorat[]>();
// listgouv: Gouvernorat[];
  constructor(private gouvernoratService: GouvernoratService , private router: Router ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      id : new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      nbreDesCas: new FormControl('', [Validators.required]),
      nbrGuerisons: new FormControl('', [Validators.required]),
      nbrDesMort: new FormControl('', [Validators.required])
    });
  }

  addGouv(): any {
    this.gouvernoratService.addGouv(this.g).subscribe(next => this.gouvernoratService.getAllgouv().subscribe(
      res => this.newlist.emit(res)));
    this.router.navigate(['/listgouvernorat']);
    this.gouvernoratService.getAllgouv();

    }
/*
  reset(): void{
    this.addForm.reset();
  }*/


}
