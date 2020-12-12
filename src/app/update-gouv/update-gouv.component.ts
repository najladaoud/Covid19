import {Component, Input, OnInit} from '@angular/core';
import {Gouvernorat} from '../model/gouvernorat';
import {GouvernoratService} from '../services/gouvernorat.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-gouv',
  templateUrl: './update-gouv.component.html',
  styleUrls: ['./update-gouv.component.css']
})
export class UpdateGouvComponent implements OnInit {
  @Input() g: Gouvernorat;
  constructor(private gouvernoratService: GouvernoratService, private router: Router, private activateR: ActivatedRoute) { }
  paramId: string;
  ngOnInit(): void {
    this.activateR.paramMap.subscribe(resultat => {
      this.paramId = resultat.get('id');
      this.gouvernoratService.getGouvById(Number(resultat.get('id'))).subscribe(resultat => this.g = resultat); });
  }
  update(){
    this.gouvernoratService.updateGouv(Number(this.paramId), this.g).subscribe(resultat => this.router.navigateByUrl('/listgouvernorat'));
  }

}
