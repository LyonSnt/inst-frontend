import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-h1',
  templateUrl: './titulo-h1.component.html',
  styleUrls: ['./titulo-h1.component.scss']
})
export class TituloH1Component implements OnInit {

  @Input() texto = '';
  @Input() tipo: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' = 'primary';
  
  constructor() { }

  ngOnInit(): void {
  }

}
