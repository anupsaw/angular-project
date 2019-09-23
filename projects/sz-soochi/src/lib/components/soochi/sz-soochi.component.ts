import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'sz-soochi',
  templateUrl: './sz-soochi.component.html',
  styleUrls: ['./sz-soochi.component.scss'],
  host:{class:'sz-soochi'}
})
export class SzSoochiComponent implements OnInit {

  public data = [{name: 'Anup', city:'Pittsburgh', age:32}, {name: 'Anup', city:'Pittsburgh', age:32}];

  constructor() { }

  ngOnInit() {
  }

}