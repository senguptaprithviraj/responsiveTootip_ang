import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'responsive-tooltip';
  constructor(private appRouter: Router) { }
  ngOnInit() {
    //this.appRouter.navigate(['/home']);
  }
}
