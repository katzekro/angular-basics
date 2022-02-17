import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  newCharacter: Character = {
    name:'',
    power: 0
  }
  


  // addNewCharacter( addNewCharacterArr: Character){
  //   console.log('newCharacter', addNewCharacterArr );
  //   this.characters.push( addNewCharacterArr );
  // }

  constructor(){//Inyeccion de dependencias
    
    }
 
}
