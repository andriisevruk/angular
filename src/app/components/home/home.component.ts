import { Component } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { FavoriteCarsService } from 'src/app/services/favourite-cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cars: any[] = []

  constructor(private carService: CarService, private favoriteCarsService: FavoriteCarsService) { }

  ngOnInit() {
    this.carService.getCars().subscribe((data: any) => {
      this.cars = data
      this.cars.reverse();
    })
  }

  addToFavorites(carId: string) {
    const selectedCar = this.cars.find(car => car._id === carId);
    const isCarAlreadyInFavorites = this.favoriteCarsService.getFavoriteCars().some(favoriteCar => favoriteCar._id === selectedCar._id);
  
    if (selectedCar && !isCarAlreadyInFavorites) {
      this.favoriteCarsService.addToFavorites(selectedCar);
      alert("Added!");
    } else if (isCarAlreadyInFavorites) {
      alert("This car is already in favorites!");
    }
  }
}
