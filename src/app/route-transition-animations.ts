import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
    transition(
      'One => Two, One => Three, One => Four, Two => One, Two => Three, Two => Four, Three => Two, Three => One, Three => Four, Four => One, Four => Two, Four => Three', 
      [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [style({ opacity: 0 })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [animate('0.5s ease-out', style({ opacity: 0 }))]),
          query(':enter', [animate('0.5s ease-out', style({ opacity: 1 }))])
         ]),
         query(':enter', animateChild())
       ])
]);