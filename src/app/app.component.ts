import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberInputComponent } from './number-input/number-input.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumberInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
