import { Component } from '@angular/core';
// import { NgIf, NgFor, NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewpipePipe } from '../../pipes/newpipe.pipe';

@Component({
  selector: 'app-home',
  // standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // imports: [NgIf, FormsModule, NgFor, NgClass],
  imports:[CommonModule, FormsModule, NewpipePipe]
})
export class HomeComponent {
  public name = 'Nguyen Van B';
  public age = 90;

  public yourName = 'Nguyen Van A'; 
  public traiCay = ['cam', 'tao', 'nho'];
  public traiCay2 = [
    {ten: "Táo", gia: 12, haGia: false},
    {ten: "Nho", gia: 20, haGia: false},
    {ten: "Chuối", gia: 8, haGia: true}
  ];


  public resetname() {
    this.yourName = ''; 
  }

  public ngOnInit():void{
    console.log('trai cay = ', this.traiCay);
  }

  public tiente: number = 54444;
  public date: Date = new Date();

  public number01: number = 123456789;


}
