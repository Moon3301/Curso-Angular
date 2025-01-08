import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  ngOnInit(): void {

    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(400)
      )
      .subscribe( value =>{
      this.onDebounce.emit( value )
    })
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }

  @Input()
  public placeholder: string = ''

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  @Input()
  public initialValue: string = ''

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress( searchTerm: string){

    this.debouncer.next(searchTerm);
  }

}
