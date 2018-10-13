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


  public rows: Array<{ name: string, setCounter: number, repCounter : number}> = [];
  public copyRows: Array<{ name: string, setCounter: number, repCounter : number}> = [];
  workout: string = "";





    
  constructor(public navCtrl: NavController) {

    this.sets = 0;
    this.counter = -1;

    this.setCounter = 0;
    this.repCounter = 0;
    this.forCounter = 0;
    this.addrow();


    }

  incrementReps() 
  {
    this.rows[1].repCounter += 1;
  }

  incrementSets() 
  {
    this.rows[1].setCounter += 1;
  }

  decrementReps() 
  {
    this.rows[1].repCounter -= 1;
  }

  decrementSets() 
  {
    this.rows[1].setCounter -= 1;
  }

  editPrev() 
  {
    if((this.counter - 1) != -1)
    {
      this.counter -= 1;
    }
    
  }

  private addrow(){

    console.log("addrow is called");

    this.rows.push({ name: this.workout, setCounter: 0, repCounter : 0});
    

    if(this.counter != -1){
      this.copyRows.push({ name: this.workout, setCounter: 0, repCounter : 0});
       console.log("Copying " + this.workout + " to this.copyRows")
       console.log('this.forCounter is ' + this.forCounter);
       this.copyRows[this.forCounter] = this.rows[1];
       this.rows.pop();
       this.forCounter++;

    }
    

    
    this.counter += 1;






    
  }

  private printArray() {
    console.log(this.copyRows);



  }

}
