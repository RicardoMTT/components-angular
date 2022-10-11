import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  constructor(private dialog: OverlayService) {}

  ngOnInit(): void {}
  openFromComponent() {
    const dialogRef = this.dialog.open(CardComponent, { data: 'John' });
    dialogRef.afterClosed().subscribe(() => {
      // Subscription runs after the dialog closes
      console.log('Dialog closed!');
    });
  }
}
