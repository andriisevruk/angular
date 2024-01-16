import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})

export class CarEditComponent {
  car!: Car 
  carId!: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.getCarDetails();
  }

  getCarDetails(): void {
    this.carId = this.route.snapshot.params['id'];
    this.carService.getCarById(this.carId).subscribe((data: Car) => {
      this.car = data      
    })
  }

  btnEdit(name: string, model: string, price: number) {
    const newDataCar = {
      name: name,
      model: model,
      price: price
    }
    
    this.carService.changeCar(newDataCar, this.carId).subscribe(() => {})
    this.back()
  }

  
  back() {
    this.location.back()
  }


}
