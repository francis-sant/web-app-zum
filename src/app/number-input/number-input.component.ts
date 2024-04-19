import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  styleUrls: ['./number-input.component.scss'],
  template: `
    <div class="sum-container">
      <h2>Type the First Number</h2>
      <input type="number" [(ngModel)]="num1" placeholder="Enter a number1" />
      <h2>Type the Second Number</h2>
      <input type="number" [(ngModel)]="num2" placeholder="Enter a number2" />

      <div class="sum-result">
        <h2>Result:</h2>
        <div *ngIf="result !== null" class="sum-total"> The total is: {{ result }}</div>
      </div>

      <button (click)="NumberSum()" class="btn btn-primary">
        Calculate Sum
      </button>

      <span *ngIf="error !== null">Error: {{ error }}</span>
    </div>
  `,
})
export class NumberInputComponent {
  num1: number = 0;
  num2: number = 0;
  result: number | null = null;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  NumberSum(): void {
    const payload = { num1: this.num1, num2: this.num2 };

    this.http
      .post<{ sum: number }>('https://localhost:7216/api/Sum/CalculateSum', payload)
      .subscribe(
        (response: { sum: number }) => {
         console.log('Result is:', response.sum);
          this.result = response.sum;
        },

        (error) => {
          this.error = 'An error has occurred';
          console.error(error);
        }
      );
  }
}
