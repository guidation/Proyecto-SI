import { Component, OnInit } from '@angular/core';
import { PlatosService } from '../platos.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  
  platos;
  constructor(service: PlatosService) {
    this.platos = service.getPlatos();
   }

  ngOnInit() {
  }

}
