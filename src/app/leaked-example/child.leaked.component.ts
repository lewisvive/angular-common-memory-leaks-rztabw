import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "child-leaked",
  template: `
    <h3>Timer Component : {{ counter }}</h3>
  `
})
export class ChildMemoryLeakedComponent implements OnInit, OnDestroy {
  componentId: number;
  public counter: number;
  public counterSubscription: Subscription;

  ngOnInit() {
    this.componentId = new Date().getTime();
    this.counterSubscription = timer(0, 1000)
      .pipe(tap(counter =>{
        console.log(`Counter ${this.componentId} ${counter}`);
      }))
      .subscribe(counter => {
        this.counter = counter;
      });
  }

  ngOnDestroy() {
    console.log(`Counter ${this.componentId} stopped at ${this.counter}`);
  }
}
