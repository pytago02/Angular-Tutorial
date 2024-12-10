import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NgIf, FormsModule],
})
export class HomeComponent {
  public name = 'Nguyen Van B';
  public age = 90;

  public yourName = 'Nguyen Van A'; 


  public resetname() {
    this.yourName = ''; 
  }
}
