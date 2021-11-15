import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Option } from '../../types/navigation-menu.types';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
  @Input() options: Option[] = [];
  @Output() navigationChange = new EventEmitter<any>();

  constructor() { }

  onClick(option: Option) {
    this.navigationChange.emit(option);
  }

}
