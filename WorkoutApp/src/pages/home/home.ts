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
  private counter : number;

  public rows: Array<{ firstCol: string, secondCol: string, thirdCol: string, setCounter: number, repCounter : number}> = [];






    
  constructor(public navCtrl: NavController) {
    this.repetition = 0;
    this.sets = 0;
    this.counter = -1;
    }

  incrementReps() 
  {
    this.rows[this.counter].repCounter += 1;
  }

  incrementSets(rCounter) 
  {
    this.rows[this.counter].setCounter += 1;
  }


  public addrow(): void {
    this.rows.push({ firstCol: 'Name of Workout', secondCol: 'Number of sets:', thirdCol: 'Number of reps:', setCounter: 0, repCounter : 0});
    this.counter += 1;
  }
}
