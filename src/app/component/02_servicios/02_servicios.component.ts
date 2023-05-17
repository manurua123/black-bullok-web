import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-02_servicios',
  templateUrl: './02_servicios.component.html',
  styleUrls: ['./02_servicios.component.css'],
})
export class serviciosComponent {
  @ViewChild('scrollDiv', { static: true }) scrollDiv: ElementRef;
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  cambiarAnchoElemento() {
    let scrollDiv = document.getElementById('scrollDiv');
    let elementos = document.getElementById('elementos');
     let logo = document.getElementById('serviciosLogo');
       let logo2 = document.getElementById('serviciosLogo2');
    let scrollPosition = window.pageYOffset;

    if (screen.width > 900) {
      if (scrollDiv?.offsetTop && elementos) {
        if (scrollPosition * 2 >= scrollDiv.offsetTop) {
          elementos.style.transition = ' 1s';
          elementos.style.width = '98vw';
          elementos.style.left = '0.5vw';
          elementos.style.margin = 'auto';
          if(logo && logo2) {
            logo.style.opacity='0'
            logo.style.transition = ' 1s';
             logo2.style.opacity = '1';
             logo2.style.transition = ' 1s';
          }
        } else {
          elementos.style.transition = ' 1s';
          elementos.style.width = '80vw';
          elementos.style.left = '10vw';
              if (logo && logo2) {
                logo.style.opacity = '1';
                logo.style.transition = ' 1s';
                logo2.style.opacity = '0';
                logo2.style.transition = ' 1s';
              }



        }
      }
    }
  }
}
