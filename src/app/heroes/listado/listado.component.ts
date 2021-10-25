import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  deletedHero: string = '';
  deleteHero(): void {
    this.deletedHero = this.heroes.pop()  || '';    
    console.log(this.deletedHero);
  }
}
