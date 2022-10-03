import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showDialog = false;

  title = 'components-angular';
  flagOpenAside: boolean = false;
  openAside() {
    this.flagOpenAside = true;
  }
}
