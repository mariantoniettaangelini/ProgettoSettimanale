import { Component } from '@angular/core';
import { CarInterface } from '../../Models/car-interface';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  carArr: CarInterface[] = [];


  ngOnInit() {
    this.getCar().then(() => {
      this.getFordCar();
      console.log(this.getFordCar());
    });
  }

  async getCar() {
    const response = await fetch("../../../assets/db.json");
    const carData: CarInterface[] = await response.json();
    this.carArr = carData;
  }

  getFordCar(): CarInterface[] {
    return this.carArr.filter(car => car.brand === "Ford");
}

}
