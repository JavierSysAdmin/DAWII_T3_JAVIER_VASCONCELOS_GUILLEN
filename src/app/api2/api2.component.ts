import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material/material.module';
import { Api2Service } from './api2.service';

@Component({
  selector: 'app-api2',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './api2.component.html',
  styleUrl: './api2.component.css'
})
export class Api2Component implements OnInit {
  todos:any[] = [];

  private idInicio = 25
  private idFin = 90

  constructor(private api2Service: Api2Service){}
  ngOnInit():void{
    this.api2Service.getTodos().subscribe(data=>{
      this.todos = data.filter((x: any) => x.id >= this.idInicio && x.id <= this.idFin);
    })
  }
}