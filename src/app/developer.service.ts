import { Injectable } from '@angular/core';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

      devs: Developer[];

		  constructor() {
			        this.devs = [new Developer("D1","Rick","Olson","Angular",2010),
				             new Developer("D2","John","Papa","Angular",2000)
							];
       }
       

       getAllDevelopers():Developer[]{
        return this.devs;
      }
}
