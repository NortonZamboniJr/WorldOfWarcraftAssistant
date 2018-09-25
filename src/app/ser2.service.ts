import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class Ser2Service {

  url = 'https://us.api.battle.net/wow/character/Azralon/'; 
  endOfUrl = '?locale=pt_BR&apikey=rsrs9dkd6k6q6myygbxmuy2zexuz537a';
  constructor(private http: Http) { }

  getCharacter(name,server): Observable<any> {
    let finalUrl = this.url + name + this.endOfUrl;
    return this.http.get(finalUrl).pipe(map((res: Response) => res.json()));

    
  } 
}