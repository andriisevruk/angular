import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCarsService {
  private favoriteCars: any[] = [];

  constructor() {
    const storedCars = localStorage.getItem('favoriteCars');
    if (storedCars) {
      this.favoriteCars = JSON.parse(storedCars);
    }
  }

  isCarInFavorites(car: any): boolean {
    return this.favoriteCars.some(favCar => favCar.id === car.id); 
  }

  private saveToLocalStorage() {
    localStorage.setItem('favoriteCars', JSON.stringify(this.favoriteCars));
  }

  getFavoriteCars(): any[] {
    return this.favoriteCars.reverse();
  }

  addToFavorites(car: any) {
    this.favoriteCars.push(car);
    this.saveToLocalStorage();
  }

  removeFromFavorites(car: any) {
    const index = this.favoriteCars.indexOf(car);
    if (index !== -1) {
      this.favoriteCars.splice(index, 1);
    }
    this.saveToLocalStorage();
  }
}