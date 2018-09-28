import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Ser1Service } from 'src/app/ser1.service';
import { Observable, fromEventPattern } from 'rxjs';
import { Personagens} from './character'
import { batata } from '../batata'



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
  characters:  Personagens[];
  tableContent = '';
  searchOnGoing = false;
  searchDone = false;
  resultsArray = [];
  search = '';
  error = ''; 
  character;
  server: string = '';
  faction='';
  factionS=[];
  i=0;
  img=[];
  character2;
  spec=[];
  k=0;

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

  deleteQuest(x) {

    // l x = this.quests.length - 1;
    //let newQuests = this.quests.splice(x, 1);
    this.quests = this.quests.filter((value, index) => index != x);
    this.img = this.img.filter((value, index) => index != x);
    //this.quests = newQuests;
    this.itemCount = this.quests.length;
    this.i--;
   

  }



   searchCharacter(){ 
    this.service.getCharacter(this.questText,this.server,this.factionS).subscribe( 
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
          if(this.character.faction == 1){
            this.factionS[this.i] = 'horda';
          }
          if(this.character.faction == 0){
            this.factionS[this.i] = 'ally';
          }
          
          // if(this.character.faction == 1){
          //   this.faction = 'https://cdn4.iconfinder.com/data/icons/smashicons-game-flat/60/41_-_For_the_Horde_Flat-512.png';
            
          //   // this.character.faction = `<img src="${this.faction}"/>`; //"https://cdn0.iconfinder.com/data/icons/world-of-warcraft-wow-faction-and-class/199/Alliance-512.png"/>';//this.faction;
          // }
          // if(this.character.faction == 0){
          //   this.faction = 'https://cdn0.iconfinder.com/data/icons/world-of-warcraft-wow-faction-and-class/199/Alliance-512.png';
           
          // }
        this.searchCharacter2();
        console.log("Spec na posicao i");
        console.log(this.spec[this.k]);
        
       
        

        setTimeout(() => {
        
        if(this.spec[this.k]==undefined){
          this.spec.push("Não cadastrado.");
          this.img.push("https://cdn.worldvectorlogo.com/logos/world-of-warcraft.svg");
        }
        else{
          
        }
        this.k++;
        this.quests.push("Nick: " + this.character.name +  " | Class: " + this.character.class + " | Level: "  + this.character.level + " | Realm: " + this.character.realm + " | Spec: " + this.spec[this.k-1]);
        console.log(this.k);
        this.questText = '';
        this.itemCount = this.quests.length;
        
        }, 1500);
      
        
        
        
        console.log(" array Spec")
        console.log(this.spec);
       
        
       
      },
      
    ); 
    } 


    searchCharacter2(){ 
      
      this.service.getRaider(this.questText,this.server).subscribe(
        res=> { console.warn(res);
          this.character2 = res;
          //this.quests.push("Nick: " + this.character.name + " Spec: " + this.character.active_spec_name);
        //this.img[this.i] = this.character2.thumbnail_url;
        this.img.push(this.character2.thumbnail_url);
        this.spec.push(this.character2.active_spec_name);
        this.questText = '';
        this.itemCount = this.quests.length;
        this.i++;
        
        },
      );
      
    }








}



//na API, tem character
// level, classe, faction
// quando a facção = 0, é ally
//quando a facção = 1, é horda
//character.level
//character.faction  