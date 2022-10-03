import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { dialogAnimation } from 'src/animations/dialog-animation';
/*
  El siguiente ejemplo define una transición que comienza ocultando el elemento, 
  luego se asegura de que se anima correctamente a cualquier estado que esté actualmente 
  activo para el disparador:
  transition("void => *", [
    style({ opacity: 0 }),
    animate(500)
  ])
*/
@Component({
  selector: 'app-confirm-dialog',
  animations: [
    trigger('dialog', [
      // Cambio de estado general para cuando se inserta un elemento en la página y se desconoce el estado de destino:
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(3050),
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'scale3d(.0, .0, .0)' })),
      ]),
    ]),
  ],
  template: `
    <div [@dialog] *ngIf="visible" class="dialog">
      <ng-content></ng-content>
      <button
        *ngIf="closable"
        (click)="close()"
        aria-label="Close"
        class="dialog__close-btn"
      >
        X
      </button>
    </div>
    <div *ngIf="visible" class="overlay" (click)="close()"></div>
  `,
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}
  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  ngOnInit(): void {}
}
