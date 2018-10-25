import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  constructor() { }

  getPlatos(){
    return [
      { "name": "Pad Thai", "price": 49.99, "img": "/assets/thai.jpg" },
      { "name": "Pizza", "price": 19.99, "img": "/assets/pep_pizza.jpg" },
      { "name": "Baby Back Ribs", "price": 39.99, "img": "/assets/b_b_ribs.jpg" },
      { "name": "Fried Oreos", "price": 9.99, "img": "/assets/fried_oreos.jpg" }
    ]
  }
}
