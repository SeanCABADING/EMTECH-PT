import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css']
})
export class ContactPage {
 Sex: string;
 Height: number;
 Weight: number;
 Age: number;
 Calories: number;
 total: number;
 activity: number;
 CalorieMessage: string;
 Note: string;
 x: string = "testing";
 y: string = "test also";

  constructor(public navCtrl: NavController) {}

   calculatedCalories(){

     if (this.Sex === "m") { 
      this.Calories = (10 * this.Weight + 6.25 * this.Height - 5 * this.Age + 5);
     }

     else if  (this.Sex === "f") { 
      this.Calories = (10 * this.Weight + 6.25 * this.Height - 5 * this.Age - 161)
     }

     else{
      this.Calories = 0.01;
     }
     this.total = parseFloat((this.Calories * this.activity).toFixed(2));
   }

}
     


