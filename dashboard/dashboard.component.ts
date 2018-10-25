import { Component, OnInit, TemplateRef } from '@angular/core';
import { PlatosService } from '../platos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  sortFood = 'Sort Food';
  selectedFood = '';
  platos;

  constructor(service:PlatosService) { 
    this.platos = service.getPlatos();
  }

  selectChangeHandler(event: any){
    this.selectedFood = event.target.value;
  }
 

  ngOnInit() {
    
  }








}