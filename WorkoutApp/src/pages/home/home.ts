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
  public copyWeight: number;

  public rsCounter : number;
  public counter : number;


  public rows: Array<{ name: string, setCounter: number, repCounter : number, weight: number}> = [];
  public copyRows: Array<{ name: string, setCounter: number, repCounter : number, weight: number}> = [];
  workout: string = "";
  copyWorkout : string = "";

  firstWorkout: string = "";
  firstWeight: number;

  public displayWorkout: boolean = true;
  public displayButtons: boolean = false;
  public lockerNumber : boolean;

  public myDate: String = new Date().toLocaleString();


  constructor(public navCtrl: NavController) {

    this.sets = 0;
    this.counter = 0;
    this.setCounter = 0;
    this.repCounter = 0;
    this.rsCounter = 0;
    this.displayWorkout = false;
    this.lockerNumber = true;
 

    }

  //Increments rep counter variable by 1
  incrementReps() 
  {
    this.repCounter += 1;
  }

  //Increments set counter variable by 1
  incrementSets() 
  {
    this.setCounter += 1;
  }

  //Decrement rep counter variable by 1
  decrementReps() 
  {
    this.repCounter -= 1;
  }

  //Decrement set counter variable by 1
  decrementSets() 
  {
    this.setCounter -= 1;
  }

  

  private addrow(){

    if(this.counter == 0)
    {

      this.counter++;
      this.lockerNumber = false;
      this.displayButtons = true;
      this.resetVariables();
      this.addrow();

    }

    else 
    {
      
      this.rows.push({ name: this.workout, setCounter: this.setCounter, repCounter : this.repCounter, weight: this.Weight});
      this.copyRows.push({ name: this.workout, setCounter: this.setCounter, repCounter : this.repCounter, weight: this.Weight});
      if(this.counter == 1)
      {
          this.copyRows.pop();
      }
      this.counter++;
      this.saveVariables();
      this.resetVariables();
      
      
    }
  
  }

  //Resets set, rep, workout, and weight variable
  private resetVariables() 
  {
    this.setCounter = 0;
    this.repCounter = 0;
    this.workout = "";
    this.Weight = 0;
  }

  //Loads previous workout that user added
  private loadPreviousWorkout() 
  {
    this.workout = this.copyWorkout;
    this.setCounter = this.copySetCounter;
    this.repCounter = this.copyRepCounter;
    this.Weight = this.copyWeight;
  }

  //Saves variables into temp varible
  private saveVariables() 
  {
    this.copyWeight = this.Weight;
    this.copyWorkout = this.workout;
    this.copySetCounter = this.setCounter;
    this.copyRepCounter = this.repCounter;
  }

  
  //Loads default value of 1 set and 8 reps
  private loadDefault() {
    this.setCounter = 1;
    this.repCounter = 8;
  }







}
