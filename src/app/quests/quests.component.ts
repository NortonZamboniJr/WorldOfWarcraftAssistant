import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})


  export class QuestsComponent {
    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
    streamer: string = 'sco';
    btnText: any;

    link1= "https://player.twitch.tv/?channel=";
    link3= "&muted=true";
    finalLink= this.link1+this.streamer+this.link3;
    link="https://player.twitch.tv/?channel=sco&muted=true";
    
    linkCreator() {
      this.link1= "https://player.twitch.tv/?channel=";
    this.link3= "&muted=true";
    this.finalLink= this.link1+this.streamer+this.link3;
    }







  }


  var httpRequest = new XMLHttpRequest();

