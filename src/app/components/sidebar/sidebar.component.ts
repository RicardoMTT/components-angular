import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() open: boolean = false;
  @Input() title: string = '';
  @Input() type: number = 1;
  @Input() user: any;
  @Output() close = new EventEmitter<boolean>();

  toggleAside = false;

  display: string = '';

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.open && changes.open.currentValue === false) {
      //Todavia no cambia el valor por default, sigue oculto
      this.display = 'none';
    } else {
      this.display = 'block';
    }
  }

  ngOnInit(): void {}

  closeEvent(e) {
    this.toggleAside = false;
  }

  @HostListener('click', ['$event'])
  public clickElementDOM(event: any) {
    if (event.target.className.includes('wrapper')) {
      this.toggleAside = !this.toggleAside;
      setTimeout(() => {
        this.close.emit(false);
        this.display = this.open ? 'none' : 'block';
        this.toggleAside = false;
      }, 700);
    }
  }
}
