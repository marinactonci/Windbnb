import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent {
  @Input() stay: any;
}
