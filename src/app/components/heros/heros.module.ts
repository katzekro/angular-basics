import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListHerosComponent } from "./list-heros/list-heros.component";

@NgModule({
  declarations:[
    HeroComponent,
    ListHerosComponent
  ],
  //elementos visibles fuera del modulo
  exports:[
    ListHerosComponent
  ],
  //Solo modulos
  imports:[
    CommonModule
  ]
})

export class HerosModule {}