import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  dev:Developer;
  dev1:Developer;
  devs:Developer[];
  constructor(developerService: DeveloperService) {
      //Instead of using the local data calling the service to get the data
      this.devs =developerService.getAllDevelopers();
			this.dev = this.devs[0];
			this.dev1 = this.devs[1];
  }

  ngOnInit() {
  }

}
