import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent{
  appName      :string = 'Accumulate App';
  numberCounter:number = 0;
  base         :number = 10;

  accumulate( value:number ){
    this.numberCounter += value;
  }

}