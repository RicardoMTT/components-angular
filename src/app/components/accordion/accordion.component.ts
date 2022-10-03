import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  panel(elementId: string) {
    const element = document.getElementById(elementId);
    element.classList.toggle('active');
    const panel = element.getAttribute('data-toggle');
    const panelElement = document.getElementById(panel);
    const classElement = panelElement.parentElement.getElementsByClassName(
      'colapso'
    )[0] as HTMLElement;

    // classelement.scrollHeight , es la altura del elemento que se va a mostrar , en este caso el elemento
    // que se va a mostrar es un div con un parrafo, el classEement.scrollHeight seria todas esa altura.
    console.log('====================================');
    console.log(classElement);
    console.log('====================================');
    if (classElement.style.maxHeight) {
      classElement.style.maxHeight = null;
    } else {
      classElement.style.maxHeight = classElement.scrollHeight + 'px';
    }
  }
}
