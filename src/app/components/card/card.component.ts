import { Component, OnInit, Inject } from '@angular/core';
import { DialogRef } from 'src/app/services/dialog-ref';
import { DIALOG_DATA } from 'src/app/services/dialog-tokens';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}
  projectContentChanged(event: any) {
    this.dialogRef.close();
  }
}
