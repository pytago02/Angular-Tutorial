import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
  public counter = 1;

  public luyThua(n: number): number{
    return n*n;
  }

 public getData(){
  return ['Data 1', 'Data 2'];
 }

}
