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
  public repCounter : number;
  public forCounter : number;

  public counter : number;
  public totalCards : number;

  public rows: Array<{ name: string, setCounter: number, repCounter : number}> = [];
  public copyRows: Array<{ name: string, setCounter: number, repCounter : number}> = [];
  workout: string = "";





    
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
       console.log("Copying " + this.workout + " to this.copyRows")
       
       this.copyRows[this.forCounter] = this.rows[0];
       this.copyRows[0].name = this.workout;
       this.rows.pop();
       this.forCounter++;

    }
    
    this.rows.push({ name: this.workout, setCounter: 0, repCounter : 0});
    this.copyRows.push({ name: this.workout, setCounter: 0, repCounter : 0});


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
    console.log(this.copyRows);



  }

}
