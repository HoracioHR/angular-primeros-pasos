import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  public deletedHero?: string;
  removeLastHeroe() : void{
    const deleteHeroe = this.heroNames.pop();
  this.deletedHero = deleteHeroe;
  }
}
