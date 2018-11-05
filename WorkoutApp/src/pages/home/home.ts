import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public repetition : number;
  public sets : number;
  public Weight: number;

  public setCounter : number;
  public repCounter : number;

  public rsCounter : number;
  public counter : number;


  public rows: Array<{ name: string, setCounter: number, repCounter : number, weight: number}> = [];
  public copyRows: Array<{ name: string, setCounter: number, repCounter : number, weight: number}> = [];
  workout: string = "";
  copyWorkout : string = "";

  firstWorkout: string = "";
  firstWeight: number;

  public displayWorkout: boolean = true;





    
  constructor(public navCtrl: NavController) {

    this.sets = 0;
    this.counter = 0;

    this.setCounter = 0;
    this.repCounter = 0;
    this.rsCounter = 0;
    this.displayWorkout = true;
 

    }

  incrementReps() 
  {
    this.repCounter += 1;

  }

  incrementSets() 
  {
    this.setCounter += 1;

  }

  decrementReps() 
  {
    this.repCounter -= 1;

  }

  decrementSets() 
  {
    this.setCounter -= 1;

  }

  

  private addrow(){

    if(this.counter == 0)
    {
      this.rows.push({ name: this.firstWorkout, setCounter: this.setCounter, repCounter : this.repCounter, weight: this.firstWeight});
      this.copyRows.push({ name: this.firstWorkout, setCounter: this.setCounter, repCounter : this.repCounter, weight: this.firstWeight});
      this.counter++;
      this.displayWorkout = false;
      this.resetCounter();

    }

    else {
      this.copyRows.push({ name: this.workout, setCounter: this.setCounter, repCounter : this.repCounter, weight: this.Weight});

      this.rows.pop();
      this.rows.push({ name: this.workout, setCounter: this.setCounter, repCounter : this.repCounter, weight: this.Weight});
      this.resetCounter();
      this.copyWorkout = this.workout;
      this.workout = "";
      this.Weight = 0;
    }
    



    
  }

  private printArray() {
    console.log(this.copyRows);

  }

  private resetCounter() {
    this.setCounter = 0;
    this.repCounter = 0;
  }

  private loadPreviousWorkout() {
    this.workout = this.copyWorkout;
  }











}
