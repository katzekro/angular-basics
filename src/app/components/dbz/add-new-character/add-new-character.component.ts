import { Component, Input } from '@angular/core';
//import { Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-new-character',
  templateUrl: './add-new-character.component.html'
})
export class AddNewCharacterComponent  {
  
  
  @Input() newCharacter:Character = {
    name:'',
    power: 0
  }
  
  //@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>()

  constructor( private dbzService: DbzService ){

  }

  addNewCharacter(  ){
    if(this.newCharacter.name.trim().length === 0 ){ return; }

    console.log('newCharacter : ',this.newCharacter)
    //this.onNewCharacter.emit( this.newCharacter );
    this.dbzService.addNewCharacter( this.newCharacter );
    this.newCharacter = {
      name:'',
      power: 0
    }
  }
 

}
