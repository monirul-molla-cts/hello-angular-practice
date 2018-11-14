export class Developer {
    firstName: string;
    lastName: string;
    favoriteLanguage: string;
    yearStarted: number;

    constructor(firstName:string,lastName:string,favoriteLanguage:string,yearStarted:number){
        this.firstName = firstName;
        this.lastName =lastName;
        this.favoriteLanguage = favoriteLanguage;
        this.yearStarted = yearStarted;
    }
}
