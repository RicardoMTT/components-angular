import { Component, Input, Output, OnInit, EventEmitter, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string;
  @Input() clearValue = false;
  // numero de caracteres para que se active la busqueda
  @Input() startIn = 0;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  @Output() searchEvent = new EventEmitter();

  constructor() {}


  ngOnInit(): void {
    fromEvent(this.filter.nativeElement, 'keyup').pipe(
      debounceTime(400),
      map((event: any) => {
        return event.target.value;
      })
    ).subscribe(data => {

      if (data.length >= this.startIn) {
        this.searchEvent.emit(data);
      }
    });
  }

  cleanSearch(){
    this.filter.nativeElement.value = "";
    this.searchEvent.emit('')
  }

}
