import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public repetition : number;
  public sets : number;
  public setCounter : number;
  public repCoutner : number;

  public counter : number;
  public totalCards : number;

  public rows: Array<{ Workout: string, setCounter: number, repCounter : number}> = [];
  public copyRows: Array<{ Workout: string, setCounter: number, repCounter : number}> = [];
  workout: String = "";





    
  constructor(public navCtrl: NavController) {

    this.sets = 0;
    this.counter = -1;
    this.totalCards = 0;
    this.setCounter = 0;
    this.repCounter = 0;
    this.forCounter = 0;
    console.log("This.counter is " + this.counter);
    this.addrow();

    }

  incrementReps() 
  {
    this.rows[0].repCounter += 1;
  }

  incrementSets() 
  {
    this.rows[0].setCounter += 1;
  }

  decrementReps() 
  {
    this.rows[0].repCounter -= 1;
  }

  decrementSets() 
  {
    this.rows[0].setCounter -= 1;
  }

  editPrev() 
  {
    if((this.counter - 1) != -1)
    {
      this.counter -= 1;
    }
    
  }

  private addrow(){


    if(this.counter != -1){
       console.log("This.forCounter is " + this.forCounter)
       this.copyRows[this.forCounter] = this.rows[0];
       this.rows.pop();
       this.forCounter++;
       console.log("Popped");
    }
    
    this.rows.push({ Workout: this.workout, setCounter: 0, repCounter : 0});
    console.log(this.rows);
    if(this.counter + 1 != this.totalCards)
    {
      this.counter = this.totalCards;
    }
    else
    {
      this.counter += 1;
      this.totalCards += 1;
    }

    console.log("This.counter is " + this.counter);


    
  }

  private printArray() {
    console.log(this.copyRows);



  }

}
