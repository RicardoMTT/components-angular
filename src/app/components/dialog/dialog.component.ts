import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { dialogAnimation } from 'src/animations/dialog-animation';

@Component({
  selector: 'app-dialog',
  animations: [dialogAnimation],
  template: `
    <div
      class="dialog__container"
      [@dialogOpened]="{ value: openedDialog, params: { duration: 200 } }"
      (@dialogOpened.done)="onDialogAnimationEvent($event)"
    >
      <div class="dialog__overlay" (click)="openedDialog = false"></div>
      <div class="dialog" role="dialog">
        <ng-content></ng-content>
        <button
          class="dialog__close"
          (click)="openedDialog = false"
          *ngIf="closeButton === false"
        >
          <img src="/assets/icons/cancel.svg" width="40" />
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  openedDialog: boolean;
  cont = 0;
  @Input() set opened(val: boolean) {
    this.cont++;
    this.openedDialog = val;
  }
  @Output() closed = new EventEmitter();

  @Input('closeButton') closeButton = false;
  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }
  onDialogAnimationEvent(event: any) {
    if ((event.toState as any) === false) {
      this.closed.emit();
      document.body.style.overflow = 'auto';
    } else {
    }
  }
}
