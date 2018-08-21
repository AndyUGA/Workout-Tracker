import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private counter : number;
    
  constructor(public navCtrl: NavController) {
    this.counter = 0;

    }

  increment() 
  {
    this.counter += 1;
  }
}
