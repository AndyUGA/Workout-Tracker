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
    this.rsCounter = 0;



    }

  incrementReps() 
  {
    this.rows[rsCounter].repCounter += 1;
  }

  incrementSets() 
  {
    this.rows[rsCounter].setCounter += 1;
  }

  decrementReps() 
  {
    this.rows[rsCounter].repCounter -= 1;
  }

  decrementSets() 
  {
    this.rows[rsCounter].setCounter -= 1;
  }

  

  private addrow(){

    console.log("addrow is called")

    this.rows.push({ name: this.workout, setCounter: 0, repCounter : 0});
    



    






    
  }

  private printArray() {
    console.log(this.rows);



  }

}
