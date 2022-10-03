import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const dialogAnimation = trigger('dialogOpened', [
  state(
    'false',
    style({
      display: 'none',
    })
  ),
  transition(
    '* => true',
    [
      style({ display: 'flex', opacity: 0 }),
      animate('{{duration}}ms ease-in-out', style({ opacity: 1 })),
    ],
    { params: { duration: 100 } }
  ),
  transition(
    'true => false',
    [
      style({ display: 'flex', opacity: 1 }),
      animate('{{duration}}ms ease-in-out', style({ opacity: 0 })),
    ],
    { params: { duration: 200 } }
  ),
]);
