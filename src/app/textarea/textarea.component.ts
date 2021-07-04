import { Component, OnChanges, OnInit } from '@angular/core';
import { CustomComponent } from '../custom/custom.component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {

  menuComponent = CustomComponent;
  title = 'Assessment';
  formControlValue = '';

  findChoices(searchText: string) {
    return ['Gina Williams', 'Jake Williams', 'Jamie John', 'John Doe', 'Jeff Stewart', 'Paula M. Keith'].filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  getChoiceLabel(choice: string) {
    return ` ${choice} `;
  }
}
