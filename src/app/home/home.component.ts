import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../Directive/highlight.directive';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, FormsModule, HighlightDirective],
})
export class HomeComponent implements OnInit {
  constructor(private common: CommonService){}

  public counter = 0;

  ngOnInit(): void {
    this.counter = this.common.counter;
  }

  get luyThua(): number{
    return this.common.luyThua(this.counter);
  }
}