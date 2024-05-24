import { Component } from '@angular/core';
import { CarInterface } from '../../Models/car-interface';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  carArr: CarInterface[] = [];


  ngOnInit() {
    this.getCar().then(() => {
      this.getFiatCars();
      console.log(this.getFiatCars());
    });
  }

  async getCar() {
    const response = await fetch("../../../assets/db.json");
    const carData: CarInterface[] = await response.json();
    this.carArr = carData;
  }

  getFiatCars(): CarInterface[] {
    return this.carArr.filter(car => car.brand === "Fiat");
}
}
