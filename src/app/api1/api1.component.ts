import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Api1Service } from './api1.service';
import { MaterialModule } from '../angular-cl3/material/material.module';

@Component({
  selector: 'app-api1',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './api1.component.html',
  styleUrl: './api1.component.css'
})
export class Api1Component {
  planets:any[] = [];

  constructor(private api1Service: Api1Service){}

 ngOnInit(): void {
   this.api1Service.getPlanets().subscribe(data =>{
     this.planets = data.results
   });
 }
 
}
