import { Component, OnInit } from '@angular/core';

import { trigger,style,transition,animate,state } from '@angular/animations';
@Component({
  selector: 'app-03_nosotros',
  templateUrl: './03_nosotros.component.html',
  styleUrls: ['./03_nosotros.component.css'],
  animations: [
    trigger('bajar', [
      state(
        'void',
        style({
          transform: 'translatey(-100%)',
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          1000,
          style({
            transform: 'translatey(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
    trigger('subir', [
      state(
        'void',
        style({
          transform: 'translatey(100%)',
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          1000,
          style({
            transform: 'translatey(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class nosotrosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
