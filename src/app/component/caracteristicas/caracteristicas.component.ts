import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css'],
})
export class CaracteristicasComponent {
  @ViewChild('scrollDiv', { static: true }) scrollDiv: ElementRef;
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  cambiarAnchoElemento() {
    let scrollDivPosition = document.getElementById('scrollDiv');
    let elementos = document.getElementById('elementos');
    let scrollPosition = window.pageYOffset
    console.log('Scroll: ' + scrollPosition);
    console.log('DIV: ' + scrollDivPosition?.offsetTop);
    if (scrollDivPosition?.offsetTop && elementos) {
      if (scrollPosition >= scrollDivPosition.offsetTop) {
        elementos.style.transition = ' 1s';
        elementos.style.width = '98vw';
        elementos.style.left = '0.5vw';
        elementos.style.margin="auto";

      } else {
          elementos.style.transition = ' 1s';
         elementos.style.width = '80vw';
         elementos.style.left = '10vw';
      }
    }
  }
}
