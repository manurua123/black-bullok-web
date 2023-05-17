import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-01_portada',
  templateUrl: './01_portada.component.html',
  styleUrls: ['./01_portada.component.css'],
})
export class portadaComponent implements OnInit {



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
