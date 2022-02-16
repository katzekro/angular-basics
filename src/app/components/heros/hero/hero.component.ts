import { Component } from "@angular/core";

@Component({
  selector:'hero-app',
  templateUrl:'hero.component.html'
})

export class HeroComponent{
  nameHero:string = 'Ironman';
  ageHero:number = 45;

  get capitalizeName():string{
    return this.nameHero.toLocaleUpperCase();
  }

  getName():string{
    return `${ this.nameHero } - ${ this.ageHero}`
  }

  changeName():void {
    this.nameHero = 'Spiderman';
  }

  changeAge(): void {
    this.ageHero = 30;
  }
}