import { Component } from '@angular/core';
import { CarInterface } from '../../Models/car-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  carArr: CarInterface[] = [];
  carDetails!: CarInterface;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCars().then(() => {
      this.route.params.subscribe((params: any) => {
        console.log('Route params:', params);
        let dettagli = this.carArr.find(c => c.brand.toLowerCase() == params.brand.toLowerCase());
        if (dettagli) {
          this.carDetails = dettagli;
        }
        console.log('Car details:', this.carDetails);
      });
    });
  }

  async getCars() {
      const res = await fetch('../../../assets/db.json');
      this.carArr = await res.json();}
}
