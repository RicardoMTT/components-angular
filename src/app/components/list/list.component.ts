import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

/*
trigger
Crea un disparador de animación con nombre, que contiene una lista de entradas state() y Transition() que se evaluarán cuando cambie la expresión vinculada al disparador.
*/
const list_animation = trigger('listAnimation', [
  transition('*<=>*', [
    // cada vez que cambia el valor de vinculación
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(-400px)' }), // El elemento se coloca en arriba 400px y luego con la siguiente animacion regresa a su posicion
        stagger(50, [
          animate(
            '500ms cubic-bezier(0.35,0,0.25,1)',
            style({ opacity: 1, transform: 'none' })
          ),
        ]),
      ],
      {
        optional: true,
      }
    ),
    query(':leave', animate('400ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [list_animation],
})
export class ListComponent implements OnInit {
  totalUsers = [
    {
      id: 1,
      name: 'ricardo',
    },
    {
      id: 1,
      name: 'ricardo',
    },
    {
      id: 1,
      name: 'ricardo',
    },

    {
      id: 1,
      name: 'ricardo',
    },

    {
      id: 1,
      name: 'ricardo',
    },
    {
      id: 1,
      name: 'ricardo',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
