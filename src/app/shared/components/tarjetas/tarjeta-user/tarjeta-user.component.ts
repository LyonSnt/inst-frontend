import { ITarjetaUser } from './itarjeta-user.metadata';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-user',
  templateUrl: './tarjeta-user.component.html',
  styleUrls: ['./tarjeta-user.component.scss']
})
export class TarjetaUserComponent implements OnInit {

  @Input() dato: ITarjetaUser;

  constructor() {

  }

  ngOnInit(): void {
  }

}
