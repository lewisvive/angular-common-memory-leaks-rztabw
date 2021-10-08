import { Component } from "@angular/core";

@Component({
  selector: "parent-leaked",
  template: `
    <h2 class="mb-5">Fix Memory Leaked</h2>
    <button class="btn btn-primary mr-1" (click)="relive()">
      Relive
    </button>
    <button class="btn btn-danger" (click)="destroy()">
      Destroy
    </button>
    <child-leaked-fix *ngIf="isAlive"></child-leaked-fix>
  `  
})
export class ParentMemoryLeakedFixComponent {
  isAlive = false;

  destroy() {
    this.isAlive = false;
  }

  public relive() {
    this.isAlive = true;
  }
}
