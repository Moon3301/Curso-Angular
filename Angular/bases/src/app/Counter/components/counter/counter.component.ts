import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],

})
export class CounterComponent {

    public counter: number = 10;

    increaseBy(value: number){

        this.counter += value;
    }

    decreaseBy(value: number){

        this.counter -= value;
    }

    resetCounter(){
        this.counter = 10;
    }



}
