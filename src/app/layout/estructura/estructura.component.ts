import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {

  public showLeftNav = true;
  public $theme: 'dark' | 'red' | 'blue-dark' | 'yellow' = 'dark';

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    this.showLeftNav = !this.showLeftNav;
  }
}
