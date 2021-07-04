import { Component, OnInit } from '@angular/core';
import { TextInputAutocompleteMenuComponent } from 'angular-text-input-autocomplete';

@Component({
  selector: 'app-custom',
  template: `
    <ul class="dropdown"
      [style.top.px]="position?.top"
      [style.left.px]="position?.left">
      <li
        *ngFor="let choice of choices; trackBy:trackById"
        [class.active]="activeChoice === choice">
        <a
          href="javascript:;"
          (click)="selectChoice.next(choice)">
          {{ choice }}
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./custom.component.css']
})
export class CustomComponent extends TextInputAutocompleteMenuComponent {

}
