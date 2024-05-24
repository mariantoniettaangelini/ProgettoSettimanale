import { Component } from '@angular/core';
import { CarInterface } from '../../Models/car-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  carArr: CarInterface[] = []
  brands: string[] = []

  ngOnInit() {
    this.getCars();
    this.getRandomCars()
  }

async getCars() {
  const res = await fetch('../../../assets/db.json')
  const carRes = res;
  this.carArr = await carRes.json();
  console.log(this.carArr);
}

getRandomCars() {
  let shuffle = (array: CarInterface[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  return shuffle([...this.carArr].slice(0,2))
}

}
