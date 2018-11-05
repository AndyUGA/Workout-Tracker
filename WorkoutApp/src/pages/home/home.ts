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

  public copySetCounter: number;
  public copyRepCounter: number;

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
      this.resetVar();

    }

    else {
      this.copyRows.push({ name: this.workout, setCounter: this.setCounter, repCounter : this.repCounter, weight: this.Weight});

      this.rows.pop();
      this.rows.push({ name: this.workout, setCounter: this.setCounter, repCounter : this.repCounter, weight: this.Weight});
      
      this.saveVariables();
      this.resetVar();
      
      this.Weight = 0;
    }
    



    
  }

  private printArray() {
    console.log(this.copyRows);

  }

  private resetVar() {
    this.setCounter = 0;
    this.repCounter = 0;
    this.workout = "";
  }

  private loadPreviousWorkout() {
    this.workout = this.copyWorkout;
    this.setCounter = this.copySetCounter;
    this.repCounter = this.copyRepCounter;
  }


  private saveVariables() {
    this.copyWorkout = this.workout;
    this.copySetCounter = this.setCounter;
    this.copyRepCounter = this.repCounter;
  }







}
