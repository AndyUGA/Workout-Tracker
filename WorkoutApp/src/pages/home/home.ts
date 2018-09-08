import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public repetition : number;
  public sets : number;

  public counter : number;

  public rows: Array<{ firstCol: string, secondCol: string, thirdCol: string, setCounter: number, repCounter : number}> = [];






    
  constructor(public navCtrl: NavController) {
    this.repetition = 5;
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

  decrementReps() 
  {
    this.rows[this.counter].repCounter -= 1;
  }

  decrementSets(rCounter) 
  {
    this.rows[this.counter].setCounter -= 1;
  }

  editPrev() 
  {
    if((this.counter - 1) != -1)
    {
      this.counter -= 1;
    }
    
  }

  public addrow(): void {
    this.rows.push({ firstCol: 'Weight:', secondCol: 'Sets:', thirdCol: 'Reps:', setCounter: 0, repCounter : 0});
    this.counter += 1;
  }
}
