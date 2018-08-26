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


  public rows: Array<{ firstCol: string, secondCol: string, thirdCol: string }> = [];






    
  constructor(public navCtrl: NavController) {
    this.repetition = 0;
    this.sets = 0;

    }

  incrementReps(rCounter) 
  {
    rCounter += 1;
  }

  incrementSets(rCounter) 
  {
    rCounter += 1;
  }


  public addrow(): void {
    this.rows.push({ firstCol: 'Name of Workout', secondCol: 'Number of sets:', thirdCol: 'Number of reps:', counter: 0});
  }
}
