import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public sorted: Observable<string[]> = of([]);

  constructor (
    public service: MyServiceService
  ) {}

  ngOnInit() {
    this.service.data$.pipe(
      map(array => array.sort().reverse())
    ).subscribe(
      (data) => {
        this.sorted = of(data);
      }
    );
  }
}
