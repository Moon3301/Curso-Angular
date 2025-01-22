import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'product-price',
  standalone: false,

  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price: number = 0;

  ngOnInit(): void {
    console.log('componente HIJO: ngOnInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('componente HIJO:  ngOnChanges')
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('componente HIJO: ngOnDestroy')
  }



}
