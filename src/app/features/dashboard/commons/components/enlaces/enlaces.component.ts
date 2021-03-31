import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.scss']
})
export class EnlacesComponent implements OnInit {
  
  host_utl = 'https://andalegrupo.com';
  ecommerce_admin = 'https://zapateriascandy.shoes/admin';


  constructor() { }

  ngOnInit(): void {
  }

}
