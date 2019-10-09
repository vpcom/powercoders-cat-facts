import { Component } from '@angular/core';
import { FactService } from './fact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cat Facts';

  constructor(private factService: FactService) { }

  ngOnInit() { 
    this.factService.getFacts().subscribe(factList => {
      console.log(factList);
    });
  }
}
