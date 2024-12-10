import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports : [NgIf],
})
export class HomeComponent {
  public name = "Nguyen Van B";
  public age = 90;
}

