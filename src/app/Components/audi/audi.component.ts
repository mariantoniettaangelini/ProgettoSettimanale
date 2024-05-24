import { Component } from '@angular/core';
import { CarInterface } from '../../Models/car-interface';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
    carArr: CarInterface[] = [];


    ngOnInit() {
      this.getCar().then(() => {
        this.getAudiCars();
        console.log(this.getAudiCars());
      });
    }

    async getCar() {
      const response = await fetch("../../../assets/db.json");
      const carData: CarInterface[] = await response.json();
      this.carArr = carData;
    }

    getAudiCars(): CarInterface[] {
      return this.carArr.filter(car => car.brand === "Audi");
  }
  }


