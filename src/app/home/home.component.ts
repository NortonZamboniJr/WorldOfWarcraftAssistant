import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Ser1Service } from 'src/app/ser1.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('quests', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
          ]))]), { optional: true }),

      ])




    ]
    )]
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Submit';
  questText: string = '';
  //quests = ['Crushing the Crown', 'Something is in the Air (and it Aint Love)', 'Get Them While They Are Young'];
  quests = [];
  tableContent = '';
  searchOnGoing = false;
  searchDone = false;
  resultsArray = [];
  search = '';
  error = ''; 
  character;
  server: string = '';

  constructor(private service: Ser1Service) { }

  ngOnInit() {
    this.itemCount = this.quests.length;
  }

  mudarSuperNorton() {
    //this.btnText = "Botao do super norton";
  }

 /*  addQuest() {
    this.quests.push(this.questText);
    this.questText = '';
    this.itemCount = this.quests.length;
  } */

  deleteQuest() {

    let x = this.quests.length - 1;
    let newQuests = this.quests.slice(0, x);
    this.quests = newQuests;
    this.itemCount = this.quests.length;

  }

   searchCharacter(){ 
    this.service.getCharacter(this.questText,this.server).subscribe( 
      res => { console.warn(res);
        this.character = res;
        if(this.character.class == 1)
          this.character.class = 'Warrior';
        if(this.character.class == 2)
          this.character.class = 'Paladin';
          if(this.character.class == 3)
          this.character.class = 'Hunter';
          if(this.character.class == 4)
          this.character.class = 'Rogue';
          if(this.character.class == 5)
          this.character.class = 'Priest';
          if(this.character.class == 6)
          this.character.class = 'Death Knight';
          if(this.character.class == 7)
          this.character.class = 'Shaman';
          if(this.character.class == 8)
          this.character.class = 'Mage';
          if(this.character.class == 9)
          this.character.class = 'Warlock';
          if(this.character.class == 10)
          this.character.class = 'Monk';
          if(this.character.class == 11)
          this.character.class = 'Druid';
          if(this.character.class == 12)
          this.character.class = 'Demon Hunter';
    
        
        this.quests.push("Nick: " + this.character.name +  " | Class: " + this.character.class + " | Level: "  + this.character.level);
        this.questText = '';
        this.itemCount = this.quests.length;
      },
    ); 
    
        // getServer(){

        // }

    } 


  removeQuest(i) {
    this.quests.splice(i, 1);
  }
}
