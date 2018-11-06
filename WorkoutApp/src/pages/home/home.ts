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

  public myDate: String = new Date().toLocaleString();


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
      this.resetVariables();
    }

    else 
    {
      this.copyRows.push({ name: this.workout, setCounter: this.setCounter, repCounter : this.repCounter, weight: this.Weight});
      this.rows.pop();
      this.rows.push({ name: this.workout, setCounter: this.setCounter, repCounter : this.repCounter, weight: this.Weight});
      this.saveVariables();
      this.resetVariables();
      
    }
  
  }

  private printArray() 
  {
    console.log(this.copyRows);
  }

  private resetVariables() 
  {
    this.setCounter = 0;
    this.repCounter = 0;
    this.workout = "";
    this.Weight = 0;
  }

  private loadPreviousWorkout() 
  {
    this.workout = this.copyWorkout;
    this.setCounter = this.copySetCounter;
    this.repCounter = this.copyRepCounter;
    this.Weight = this.copyWeight;
  }


  private saveVariables() 
  {
    this.copyWeight = this.Weight;
    this.copyWorkout = this.workout;
    this.copySetCounter = this.setCounter;
    this.copyRepCounter = this.repCounter;
  }

  private getTime() {
    console.log(this.myDate);
  }







}
