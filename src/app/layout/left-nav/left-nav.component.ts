import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LEFT_NAV_MENUS } from '@data/constants/left-nav-menu.const';
import { ILeftNavMenu } from '@data/interfaces';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  @Output() showMenu = new EventEmitter<any>();
  public faBars = faBars;
  public nombre = 'Leonel Santacruz';
  public posicion = 'Gerente';
  public avatar = 'assets/images/defaults/avatar5.png'
  public logo = 'assets/images/defaults/lo2.png'
  public menus: ILeftNavMenu[] = LEFT_NAV_MENUS;

  constructor() { }

  ngOnInit(): void {
  }

}
