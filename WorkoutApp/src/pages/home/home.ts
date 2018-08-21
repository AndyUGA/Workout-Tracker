import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private repetition : number;
  private sets : number;
  private test : any;
    
  constructor(public navCtrl: NavController) {
    this.repetition = 0;
    this.sets = 0;

    }

  incrementReps() 
  {
    this.repetition += 1;
  }

  incrementSets() 
  {
    this.sets += 1;
  }
}
