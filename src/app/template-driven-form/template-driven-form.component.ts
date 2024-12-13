import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-template-driven-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  public name = '';

  constructor(private common: CommonService){
    this.common.submitData(this.name);
  }

  public submitForm(){
    this.common.submitData(this.name);
  }

}
