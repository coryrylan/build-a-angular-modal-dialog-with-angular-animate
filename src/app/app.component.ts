import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  standalone: true,
  imports: [CommonModule, DialogComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showDialog = false;
}
