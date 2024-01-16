import { Component } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { FavoriteCarsService } from 'src/app/services/favourite-cars.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {
  favoriteCars: any[] = [];

  constructor(private carService: CarService, private favoriteCarsService: FavoriteCarsService) {
    this.favoriteCars = favoriteCarsService.getFavoriteCars();
  }

  removeFromFavorites(car: any) {
    this.favoriteCarsService.removeFromFavorites(car);
  }

}

