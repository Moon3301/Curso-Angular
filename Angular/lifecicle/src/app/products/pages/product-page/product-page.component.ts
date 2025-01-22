import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-page',
  standalone: false,

  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor(){
    console.log('constructor');

  }

  increasePrice(): void {
    this.currentPrice ++;
  }

  ngOnDestroy(): void {
    console.log('componente PADRE: ngOnDestroy')
  }

  ngAfterViewChecked(): void {
    console.log('componente PADRE: ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('componente PADRE: ngAfterViewInit')
  }

  ngAfterContentChecked(): void {
    console.log('componente PADRE: ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('componente PADRE: ngAfterContentInit')
  }

  ngDoCheck(): void {
    console.log('componente PADRE: ngDoCheck')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('componente PADRE: ngOnChanges')
    console.log({changes});

  }

  ngOnInit(): void {
    console.log('componente PADRE: ngOnInit')
  }

}
