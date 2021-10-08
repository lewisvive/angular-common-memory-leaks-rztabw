import { Component } from "@angular/core";

@Component({
  selector: "parent-leaked",
  template: `
    <h2 class="mb-5">Memory Leaked - example</h2>
    <button class="btn btn-primary mr-1" (click)="relive()">
      Relive
    </button>
    <button class="btn btn-danger" (click)="destroy()">
      Destroy
    </button>
    <child-leaked *ngIf="isAlive"></child-leaked>
  `  
})
export class ParentMemoryLeakedComponent {
  isAlive = false;

  destroy() {
    this.isAlive = false;
  }

  public relive() {
    this.isAlive = true;
  }
}
