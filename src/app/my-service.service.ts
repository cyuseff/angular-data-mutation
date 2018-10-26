import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const initialData: string[] = ['a', 'b', 'c'];

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private data: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public data$: Observable<string[]> = this.data.asObservable();

  constructor () {
    this.data.next(initialData);
  }

  public update(idx: number, value: string) {
    const data = [...this.data.getValue()];
    data[idx] = value;
    this.data.next(data);
  }
}
