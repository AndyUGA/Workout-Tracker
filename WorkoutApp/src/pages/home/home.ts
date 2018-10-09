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
  public totalCards : number;

  public rows: Array<{ Workout: string, setCounter: number, repCounter : number}> = [];
  workout: String = "";





    
  constructor(public navCtrl: NavController) {
    this.repetition = 5;
    this.sets = 0;
    this.counter = -1;
    this.totalCards = 0;
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

  private addrow(){
    this.rows.push({ Workout: this.workout, setCounter: 0, repCounter : 0});

    if(this.counter + 1 != this.totalCards)
    {
      this.counter = this.totalCards;
    }
    else
    {
      this.counter += 1;
      this.totalCards += 1;
    }
    
  }

  private printArray() {

    console.log("This counter is: " + this.counter);
    for(var i = -1; i < this.counter; i++)
    {
      console.log(this.rows[i+1]);
    }
    console.log("printArray button has been pressed!");
    console.log(this.workout);


  }

}
