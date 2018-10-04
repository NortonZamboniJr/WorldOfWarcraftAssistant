import { Personagens } from './home/character';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getOrCreateNodeInjector } from '@angular/core/src/render3/di';

@Injectable({
  providedIn: 'root'
})

export class Ser1Service {

  url = 'https://us.api.battle.net/wow/character/'; 
  url2 = 'https://raider.io/api/v1/characters/profile?region=us&realm=';
  endOfUrl = '?locale=pt_BR&apikey=rsrs9dkd6k6q6myygbxmuy2zexuz537a';
  itemUrlDone;
  constructor(private http: Http) { }

  getCharacter(name,server,factionS): Observable<Personagens> {
    
    let finalUrl = this.url + server + '/' + name + this.endOfUrl;
    console.log(finalUrl);
    return this.http.get(finalUrl).pipe(map((res: Response) => res.json()));
  }

  getRaider(name,server): Observable<Personagens> {
    let finalUrl = this.url2 + server + '&name=' + name;
    console.log(finalUrl);
    return this.http.get(finalUrl).pipe(map((res: Response) => res.json()));
  }

  getArmory(name,server): Observable<Personagens> {
    this.itemUrlDone = this.url + server + '/' + name + '?fields=items&locale=pt_BR&apikey=rsrs9dkd6k6q6myygbxmuy2zexuz537a';
    console.log(this.itemUrlDone);
    return this.http.get(this.itemUrlDone).pipe(map((res: Response) => res.json()));
  }

}