import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

  private characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 13000
    },
    {
      name: 'Piccolo',
      power: 9000
    },
    {
      name: 'Trunks',
      power: 6000
    },
  ]

  get listCharacters(): Character[] {
    return [...this.characters];
  }

  constructor(){  }

  addNewCharacter( character: Character ){
    this.characters.push( character );
  }
}