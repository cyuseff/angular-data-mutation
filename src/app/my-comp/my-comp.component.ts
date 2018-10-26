import { Component, OnInit, Input } from '@angular/core';
import { MyServiceService } from '../my-service.service';

const mutateVal: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
let n = 0;

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  @Input() public data: string[] = [];

  constructor(
    private service: MyServiceService,
  ) { }

  ngOnInit() {
  }

  public mutate(idx: number) {
    n = n + 1;
    if (n >= mutateVal.length) {
      n = 0;
    }

    this.data[idx] = mutateVal[n];
  }

  public reEmit(idx: number) {
    n = n + 1;
    if (n >= mutateVal.length) {
      n = 0;
    }

    this.service.update(idx, mutateVal[n]);
  }
}
