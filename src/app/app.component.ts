import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router,
    private route: ActivatedRoute,
  ){
    }
  irApi1(): void{
    this.router.navigate(["Api1"], {relativeTo: this.route});
  }
  irApi2(): void{
    this.router.navigate(["Api2"], {relativeTo: this.route});
  }
}
