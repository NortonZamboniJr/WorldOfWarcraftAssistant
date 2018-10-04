import { Component, OnInit } from '@angular/core';
import { Ser1Service } from 'src/app/ser1.service';
import { Personagens} from 'src/app/home/character';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css']
})
export class GearComponent implements OnInit {

  constructor(private service: Ser1Service) { }
  ngOnInit() {
  }

  name ='';
  server = '';
  characters:  Personagens[];
  character;
  head='';
  headItem=[];
  shoulderItem=[];
  shoulderUrl;
  headUrl;

  searchGear(){ 
    this.service.getArmory(this.name,this.server).subscribe( 
      res => { console.warn(res);
        this.character = res;
        
        // this.gears.push("Head:  " + this.character.items.head.icon);
        this.headItem.push("Head: " + this.character.items.head.name + "\n" + "Item Level: " + this.character.items.head.itemLevel);
        this.shoulderItem.push("Shoulder: " + this.character.items.shoulder.name + "\n" + "Item Level: " + this.character.items.shoulder.itemLevel);
        this.name = '';
        let url = 'https://wow.zamimg.com/images/wow/icons/large/';
        let endUrl = '.jpg';
        this.shoulderUrl = url + this.character.items.shoulder.icon + endUrl;
        this.headUrl = url + this.character.items.head.icon + endUrl;
        console.log(this.shoulderUrl);

      
      },
    );
    }
  }

