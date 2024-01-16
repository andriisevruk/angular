import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {

  constructor(
    private carService: CarService,
    private location: Location
  ) { }

  carName = ''
  carModel = ''
  carPrice: number = 0

  isFormValid(): boolean {
    return this.carName !== '' && this.carModel !== '' && this.carPrice !== 0 && this.carPrice !== null && /^\d+$/.test(this.carPrice.toString());
  }

  btnAdd() {
    if (this.isFormValid()) {
      const newCar = {
        name: this.carName,
        model: this.carModel,
        price: this.carPrice
      }
      this.carService.addCar(newCar).subscribe(() => {
        this.back()
      })
    }
  }
  back() {
    this.location.back()
  }
}
