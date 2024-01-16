import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = "http://localhost:3100/api/cars"

  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get(this.url)
  }

  getCarById(id: string): Observable<Car> {
    const carUrl = `${this.url}/${id}`;
    return this.http.get<Car>(carUrl);
  }

  deleteCar(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(delay(2000))
  }

  addCar(car: any) {
    return this.http.post(this.url, car)
  }

  changeCar(car: any, id: string): Observable<any>{
    const carUrl = `${this.url}/${id}`
    return this.http.put(carUrl, car)
  }
} 



