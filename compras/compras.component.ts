import { Component, OnInit } from '@angular/core';
import { IProducts, IProductos, IProductos2, IProductos3} from '../products';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  

  
  upproducts: IProducts[] = [];
  
  productos3: IProductos3[];
  selectedProduct : Subject<any> = new Subject;
  total:number = 0;
  delit:number = 0;

  constructor() { 

    this.productos3 = [
      {
        producto_id1 : "109747638",
      
        producto_name12 : "Nuggets, Pizza",
        producto_price1 : "En camino",
       
        producto_quality1 : "2, 7",
        producto_quality2 : "romanchiarelli@gmail.com"
      },
      {
        producto_id1 : "93874993",
     
        producto_name12 : "Milanesa, Nuggets, Sopa, Hamburguesa",
        producto_price1 : "En camino",
       
        producto_quality1 : "1, 3, 1, 5",
        producto_quality2 : "hannasarkis@gmail.com"
      },
      {
        producto_id1 : "974647488",
     
        producto_name12 : "Pasta",
        producto_price1 : "Entregado",
       
        producto_quality1 : "10",
        producto_quality2 : "eduardoramirez@gmail.com"
      },
      {
        producto_id1 : "17193737",
     
        producto_name12 : "Pizza",
        producto_price1 : "En preparación",
       
        producto_quality1 : "20",
        producto_quality2 : "miguelsilva32@gmail.com"
      }
    ];
   }

   ngOnInit() {

  }
}