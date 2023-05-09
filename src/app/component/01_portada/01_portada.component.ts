import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-01_portada',
  templateUrl: './01_portada.component.html',
  styleUrls: ['./01_portada.component.css'],
})
export class portadaComponent implements OnInit {
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;


  constructor() {}

  ngOnInit() {}

  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

  activeMenu = true;
  onMenuOpened() {
    this.activeMenu = !this.activeMenu;
  }

  onMenuClosed() {
    this.activeMenu = !this.activeMenu;
  }
}
