import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
  public counter = 0;

  public luyThua(n: number): number{
    return n*n;
  }

  public submitData(data: any): void{
    console.log('Du lieu duoc gui: ' + data);
  }
}
