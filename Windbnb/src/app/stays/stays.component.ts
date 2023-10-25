import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stays',
  templateUrl: './stays.component.html',
  styleUrls: ['./stays.component.css']
})
export class StaysComponent {
  @Input() stays: any;
}
