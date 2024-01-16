import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})


export class MaintenanceComponent {

  cars: any[] = []

  constructor(private carService: CarService, private router: Router) { };

  ngOnInit() {
    this.carService.getCars().subscribe((data: any) => {
      this.cars = data
      this.cars.reverse();
    })
  }

  showCarDetails(id: number) {
    this.router.navigate(['auth/car-details', id])
  }

  carEdit(id: number) {
    this.router.navigate(['auth/car-edit', id])
  }

  spin: boolean = true
  deletedId: number = 0

  btnDelete(id: number) {
    this.spin = true
    this.deletedId = id
    this.carService.deleteCar(id).subscribe(() => {
      this.ngOnInit()
      this.spin = false
    })
  }
};