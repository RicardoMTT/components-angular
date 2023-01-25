import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyAlphabetic]'
})
export class OnlyAlphabeticDirective {

  constructor(private _el:ElementRef) { }

  @HostListener('input',['$event']) onInputChange(event:any){

    const initialValue = this._el.nativeElement.value;
    console.log('aaa',initialValue)
    this._el.nativeElement.value = initialValue.replace(/[^a-zA-Z]/,'');
    console.log('this._el.nativeElement.value',this._el.nativeElement.value);

    if (initialValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
