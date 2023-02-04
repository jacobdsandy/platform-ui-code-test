import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.css']
})
export class ProviderCardComponent implements OnInit {

  @Input() provider: any;

  @Input() selected: boolean = false;

  @Output() itemClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  iconClicked(): void {
    setTimeout(() => {
      this.itemClicked.emit(this.provider);
    }, 200)
  }

}
