import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { faSms } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
   faSms = faSms;
  @Input() product: any;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}