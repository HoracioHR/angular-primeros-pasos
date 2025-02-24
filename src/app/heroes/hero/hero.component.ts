import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }
  getHeroDescription(): string{
    return `${ this.name } - ${ this.age }`
  }
  changeHero(hero : string): void{
    this.name = hero;
  }
  changeAge(age : number):void {
    this.age = age;
  }

  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;
  }

}
