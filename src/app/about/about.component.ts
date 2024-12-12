import { Component, OnInit} from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  constructor(private commonService: CommonService){}
  public counter = 0
  public luyThua = 0

  ngOnInit(): void {
    this.counter = this.commonService.counter;
    this.luyThua = this.commonService.luyThua(this.counter);
  }
}
