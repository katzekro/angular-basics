import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-heros',
  templateUrl: './list-heros.component.html'
})
export class ListHerosComponent {
  
  heros: string[] = ['Ironman', 'Spiderman', 'Thor', 'Captain America', 'Batman'];
  deletedHero: string = '';
 
  deleteHero() {
    this.deletedHero = this.heros.shift() || '';
  }

  

  //Version 1 usando arreglos :(
  //deleteHero(){
      //eliminar un heroe de modo aleatorio
      /*const random = Math.floor(Math.random() * this.heros.length);
      console.log("🚀 ~ random: ", random)
      const element = this.heros.splice(random, 1)[0];
      console.log("🚀 ~ Heroe Borrado : ", element)*/
      //let heroDeleted = this.heros.shift();
      //this.deletedHeros.push(heroDeleted || '');
    //} 

  /* content():boolean{
    let checkEmpty:boolean = this.deletedHeros.toLocaleString() !== '' ? true : false;
    return checkEmpty;
  } */


}
