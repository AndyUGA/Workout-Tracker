import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private repetition : number;
  private sets : number;
  private test : any;


  public rows: Array<{ firstCol: string, secondCol: string }> = [];






    
  constructor(public navCtrl: NavController) {
    this.repetition = 0;
    this.sets = 0;

    }

  incrementReps() 
  {
    this.repetition += 1;
  }

  incrementSets() 
  {
    this.sets += 1;
  }


  public addrow(): void {
    this.rows.push({ firstCol: '1 of 2', secondCol: '2 of 2' });
  }
}
