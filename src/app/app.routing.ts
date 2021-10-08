import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ParentMemoryLeakedComponent } from "./leaked-example/parent.leaked.component";
import { ChildMemoryLeakedComponent } from "./leaked-example/child.leaked.component";
import { ParentMemoryLeakedFixComponent } from "./leaked-fix/parent.leaked-fix.component";
import { ChildMemoryLeakedFixComponent } from "./leaked-fix/child.leaked-fix.component";
import { WebsocketExampleComponent } from "./websocket/websocket-example.component";
import { CoinPriceComponent } from "./websocket/coin-price.component";

const routes: Route[] = [
  {
    path: "memory-leaked",
    component: ParentMemoryLeakedComponent
  },
  {
    path: "memory-leaked-fix",
    component: ParentMemoryLeakedFixComponent
  },
  {
    path: "websocket",
    component: WebsocketExampleComponent
  },
  {
    path: "",
    redirectTo: "memory-leaked",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  declarations: [
    ParentMemoryLeakedComponent,
    ChildMemoryLeakedComponent,
    ParentMemoryLeakedFixComponent,
    ChildMemoryLeakedFixComponent,
    WebsocketExampleComponent,
    CoinPriceComponent
  ],
  exports: [RouterModule]
})
export class AppRouting {}
