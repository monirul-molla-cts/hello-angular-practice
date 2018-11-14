import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  dev:Developer;
  dev1:Developer;
  devs:Developer[];
  constructor() {
    this.dev = new Developer("Monirul","Molla","Java",2008);
    this.dev1 = new Developer("John","Doe","Angular",2015);
    this.devs = [new Developer("Rick","Olson","Angular",2010),
				             new Developer("John","Papa","Angular",2000)
							];
  }

  ngOnInit() {
  }

}
