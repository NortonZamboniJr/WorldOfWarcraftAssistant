import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class Ser1Service {

  url = 'https://us.api.battle.net/wow/character/'; 
  endOfUrl = '?locale=pt_BR&apikey=rsrs9dkd6k6q6myygbxmuy2zexuz537a';
  constructor(private http: Http) { }

  getCharacter(name,server): Observable<any> {
    let finalUrl = this.url + server + '/' + name + this.endOfUrl;
    console.log(finalUrl);
    return this.http.get(finalUrl).pipe(map((res: Response) => res.json()));
  }
}