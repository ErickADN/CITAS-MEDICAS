import { Component ,Input } from "@angular/core";


@Component({
  selector: 'app-button-option-menu',
  templateUrl: './button-option-menu.component.html',
  styleUrls: ['./button-option-menu.component.css']
})
export class ButtonOptionMenuComponent  {

  @Input() title?:string;
  @Input() description?: string;
  @Input() icon?: string;
  @Input() color?:string;
  @Input() route?: string;
}
