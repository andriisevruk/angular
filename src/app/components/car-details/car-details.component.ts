import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {

  car!: Car

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.getCarDetails();
  }

  getCarDetails(): void {
    const id = this.route.snapshot.params['id'];
    this.carService.getCarById(id).subscribe((data: Car) => {
      this.car = data
    })
  }

  back() {
    this.location.back()
  }
}